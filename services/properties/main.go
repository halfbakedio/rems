package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/halfbakedio/rems/services/properties/api/controllers"
	mw "github.com/halfbakedio/rems/services/properties/api/middleware"
	"github.com/halfbakedio/rems/services/properties/api/routes"
	"github.com/halfbakedio/rems/services/properties/utils"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/go-chi/render"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Timeout(60 * time.Second))
	r.Use(render.SetContentType(render.ContentTypeJSON))
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "Cookie", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	r.Mount("/public", publicRouter())
	r.Mount("/", protectedRouter())

	host := utils.GetEnv("PROPERTIES_HOST", "")
	port := utils.GetEnv("PROPERTIES_PORT", "4002")
	bind := fmt.Sprintf("%s:%s", host, port)

	log.Printf("starting service on %s\n", bind)

	if err := http.ListenAndServe(bind, r); err != nil {
		log.Fatal(err)
	}
}

func protectedRouter() *chi.Mux {
	apiKey := os.Getenv("CLERK_SECRET_KEY")

	client, err := clerk.NewClient(apiKey)
	if err != nil {
		panic(err)
	}

	injectWithSession := clerk.WithSession(client)

	r := chi.NewRouter()

	r.Use(injectWithSession)
	r.Use(mw.Clerk)

	propertyRoutes := routes.NewPropertyRoutes()
	propertyRouter := propertyRoutes.Setup()

	openHouseRoutes := routes.NewOpenHouseRoutes()
	openHouseRouter := openHouseRoutes.Setup()

	r.Mount("/properties", propertyRouter)
	r.Mount("/open-houses", openHouseRouter)

	return r
}

func publicRouter() *chi.Mux {
	controller := controllers.NewOpenHouseController()

	r := chi.NewRouter()

	r.Get("/open-houses/{id}", controller.ReadPublic)

	return r
}
