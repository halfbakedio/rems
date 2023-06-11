package middleware

import (
	"context"
	"net/http"
	"os"

	"github.com/halfbakedio/rems/services/properties/api/responses"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/go-chi/render"
)

type ClerkContext struct {
	User         *clerk.User
	Organization *clerk.Organization
}

func (c *ClerkContext) OrganizationID() string {
	if c.Organization == nil {
		return ""
	}
	return c.Organization.ID
}

// Clerk middleware is used to load the Clerk user for a session into the
// request.
func Clerk(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		var client clerk.Client
		var organization *clerk.Organization
		var err error

		apiKey := os.Getenv("CLERK_API_KEY")

		if client, err = clerk.NewClient(apiKey); err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal server error"))
			return
		}

		ctx := req.Context()

		sessClaims, ok := ctx.Value(clerk.ActiveSessionClaims).(*clerk.SessionClaims)
		if !ok {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}

		user, err := client.Users().Read(sessClaims.Claims.Subject)
		if err != nil {
			_ = render.Render(w, req, responses.ErrNotFound)
			return
		}

		if sessClaims.ActiveOrganizationID != "" {
			// ignore errors to allow personal workspaces
			organization, _ = client.Organizations().Read(sessClaims.ActiveOrganizationID)
		}

		clerkCtx := &ClerkContext{
			User:         user,
			Organization: organization,
		}
		newCtx := context.WithValue(req.Context(), "clerk", clerkCtx)

		next.ServeHTTP(w, req.WithContext(newCtx))
	})
}
