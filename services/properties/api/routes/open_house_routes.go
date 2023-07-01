package routes

import (
	"github.com/halfbakedio/rems/services/properties/api/controllers"

	"github.com/go-chi/chi/v5"
)

// OpenHouseRoutes struct
type OpenHouseRoutes struct {
	controller *controllers.OpenHouseController
}

func NewOpenHouseRoutes() *OpenHouseRoutes {
	return &OpenHouseRoutes{
		controller: controllers.NewOpenHouseController(),
	}
}

func (o *OpenHouseRoutes) Setup() chi.Router {
	r := chi.NewRouter()

	r.Get("/", o.controller.List)
	// r.Post("/", o.controller.Create)
	// r.Route("/{propertyID}", func(r chi.Router) {
	// 	r.Get("/", o.controller.Read)
	// 	r.Put("/", o.controller.Update)
	// 	r.Delete("/", o.controller.Delete)
	// })

	return r
}
