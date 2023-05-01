package user

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func Router() chi.Router {
	r := chi.NewRouter()

	r.With(paginate).Get("/", List())
	r.Post("/", Create())
	r.Get("/roles", Roles())
	r.Get("/search", Search())
	r.Route("/{userID}", func(r chi.Router) {
		r.Use(Context)
		r.Get("/", Get())
		r.Put("/", Update())
		r.Delete("/", Delete())
	})

	return r
}

// paginate is a stub, but very possible to implement middleware logic
// to handle the request params for handling a paginated request.
func paginate(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// just a stub.. some ideas are to look at URL query params for something like
		// the page number, or the limit, and send a query cursor down the chain
		next.ServeHTTP(w, r)
	})
}
