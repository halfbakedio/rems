package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/halfbakedio/rems/services/admin/user"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func main() {
	apiKey := os.Getenv("CLERK_SECRET_KEY")

	client, err := clerk.NewClient(apiKey)
	if err != nil {
		panic(err)
	}

	injectWithSession := clerk.WithSession(client)

	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Timeout(60 * time.Second))

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "Cookie", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	r.Use(injectWithSession)
	r.Use(ClerkContext)

	r.Get("/me", user.Me())
	r.Mount("/users", user.Router())

	host := getEnv("ADMIN_HOST", "")
	port := getEnv("ADMIN_PORT", "4001")
	bind := fmt.Sprintf("%s:%s", host, port)

	log.Printf("starting service on %s\n", bind)

	if err = http.ListenAndServe(bind, r); err != nil {
		log.Fatal(err)
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

// ClerkContext middleware is used to load the Clerk client into the request.
func ClerkContext(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var client clerk.Client
		var err error

		apiKey := os.Getenv("CLERK_SECRET_KEY")

		if client, err = clerk.NewClient(apiKey); err != nil {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(r.Context(), "clerk", client)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
