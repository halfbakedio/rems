package routes

import (
	"github.com/halfbakedio/rems/services/properties/api/controllers"

	"github.com/go-chi/chi/v5"
)

// PropertyRoutes struct
type PropertyRoutes struct {
	controller *controllers.PropertyController
}

func NewPropertyRoutes() *PropertyRoutes {
	return &PropertyRoutes{
		controller: controllers.NewPropertyController(),
	}
}

func (p *PropertyRoutes) Setup() chi.Router {
	r := chi.NewRouter()

	r.Get("/", p.controller.List)
	// r.Post("/", p.controller.Create)
	// r.Route("/{propertyID}", func(r chi.Router) {
	// 	r.Get("/", p.controller.Get)
	// 	r.Put("/", p.controller.Update)
	// 	r.Delete("/", p.controller.Delete)
	// })

	return r
}
