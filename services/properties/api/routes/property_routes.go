package routes

import (
	"net/http"
)

// PropertyRoutes struct
type PropertyRoutes struct {
	withSession http.Handler
}

func NewPropertyRoutes(withSession http.Handler) *PropertyRoutes {
	return &PropertyRoutes{
		withSession: withSession,
	}
}

func (r *PropertyRoutes) Setup() {

}
