package responses

import (
	"net/http"

	"github.com/halfbakedio/rems/services/properties/models"

	"github.com/go-chi/render"
)

type PropertyResponse struct {
	*models.Property

	// We add an additional field to the response here.. such as this
	// elapsed computed property
	Elapsed int64 `json:"elapsed"`
}

func (rd *PropertyResponse) Render(w http.ResponseWriter, r *http.Request) error {
	// Pre-processing before a response is marshalled and sent across the wire
	rd.Elapsed = 10
	return nil
}

func NewPropertyResponse(property *models.Property) *PropertyResponse {
	resp := &PropertyResponse{Property: property}

	// if resp.User == nil {
	// 	if user, _ := dbGetUser(resp.UserID); user != nil {
	// 		resp.User = NewUserPayloadResponse(user)
	// 	}
	// }

	return resp
}

func NewPropertiesResponse(properties models.Properties) []render.Renderer {
	list := []render.Renderer{}

	for _, property := range properties {
		list = append(list, NewPropertyResponse(property))
	}

	return list
}
