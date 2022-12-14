package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"

	"github.com/halfbakedio/rems/services/tasks/database"
	"github.com/halfbakedio/rems/services/tasks/routes"
	"github.com/halfbakedio/rems/services/tasks/utils"
)

func apiRoutes(app *fiber.App) {
	api := app.Group("/api")

	v1 := api.Group("/v1")
	v1.Post("/", routes.Create)
	v1.Get("/:id?", routes.Read)
	v1.Put("/:id", routes.Update)
	v1.Delete("/:id", routes.Delete)
}

func main() {
	config := fiber.Config{}

	if utils.GetEnv("TASKS_USE_IPV6", "false") == "true" {
		config.Network = fiber.NetworkTCP6
	}

	database.ConnectDB()
	app := fiber.New(config)

	apiRoutes(app)

	app.Use(cors.New())
	app.Use(logger.New())

	app.Use(func(c *fiber.Ctx) error {
		return c.SendStatus(http.StatusNotFound)
	})

	bind := utils.GetEnv("TASKS_BIND", "")
	port := utils.GetEnv("TASKS_PORT", "4002")
	address := fmt.Sprintf("%s:%s", bind, port)

	log.Fatal(app.Listen(address))
}
