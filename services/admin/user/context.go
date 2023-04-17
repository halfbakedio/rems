package user

import (
	"context"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func Context(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		userID := chi.URLParam(r, "userID")
		// user, err := clerk.User().Get(userID)
		// if err != nil {
		// 	http.Error(w, http.StatusText(404), 404)
		// 	return
		// }
		// ctx := context.WithValue(r.Context(), "user", user)
		ctx := context.WithValue(r.Context(), "userID", userID)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
