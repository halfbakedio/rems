package controllers

import (
	"net/http"
	"time"

	"github.com/halfbakedio/rems/services/properties/api/middleware"
	"github.com/halfbakedio/rems/services/properties/api/responses"
	"github.com/halfbakedio/rems/services/properties/models"

	"github.com/go-chi/render"
	"github.com/gobuffalo/nulls"
)

type PropertyController struct{}

func NewPropertyController() *PropertyController {
	return &PropertyController{}
}

func (p *PropertyController) List(
	w http.ResponseWriter,
	req *http.Request,
) {
	ctx := req.Context()
	clerk := ctx.Value("clerk").(*middleware.ClerkContext)

	properties := models.Properties{
		&models.Property{
			ID:             1,
			UserID:         clerk.User.ID,
			OrganizationID: clerk.OrganizationID(),
			ImageURI:       nulls.NewString("/tmp/img.png"),
			CreatedAt:      time.Now(),
			UpdatedAt:      time.Now(),
		},
		&models.Property{
			ID:             2,
			UserID:         clerk.User.ID,
			OrganizationID: clerk.OrganizationID(),
			ImageURI:       nulls.NewString("/tmp/img.png"),
			CreatedAt:      time.Now(),
			UpdatedAt:      time.Now(),
		},
	}

	err := render.RenderList(w, req, responses.NewPropertiesResponse(properties))
	if err != nil {
		render.Render(w, req, responses.ErrRender(err))
		return
	}
}
