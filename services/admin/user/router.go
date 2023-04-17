package user

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func Router(session func(http.Handler) http.Handler) chi.Router {
	r := chi.NewRouter()

	r.With(paginate).Get("/", session(List()).(http.HandlerFunc))
	r.Post("/", session(Create()).(http.HandlerFunc))
	r.Get("/roles", session(Roles()).(http.HandlerFunc))
	r.Get("/search", session(Search()).(http.HandlerFunc))
	r.Route("/{userID}", func(r chi.Router) {
		r.Use(Context)
		r.Get("/", session(Get()).(http.HandlerFunc))
		r.Put("/", session(Update()).(http.HandlerFunc))
		r.Delete("/", session(Delete()).(http.HandlerFunc))
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
