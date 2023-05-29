package responses

import (
	"net/http"

	"github.com/halfbakedio/rems/services/properties/models"
	"github.com/halfbakedio/rems/services/properties/types"

	"github.com/go-chi/render"
)

// OpenHouseResponse is the response payload for the OpenHouse model
type OpenHouseResponse struct {
	*models.OpenHouse
}

// Render is used to render open house the response
func (o *OpenHouseResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

// NewOpenHouseResponse creates a new instance of OpenHouseResponse
func NewOpenHouseResponse(openHouse *models.OpenHouse) *OpenHouseResponse {
	return &OpenHouseResponse{OpenHouse: openHouse}
}

// NewOpenHousesResponse is the response payload for the OpenHouse model
func NewOpenHousesResponse(openHouses []*models.OpenHouse) []render.Renderer {
	list := []render.Renderer{}

	for _, openHouse := range openHouses {
		list = append(list, NewOpenHouseResponse(openHouse))
	}

	return list
}

// PublicOpenHouseResponse is the response payload for the PublicOpenHouse type
type PublicOpenHouseResponse struct {
	*types.PublicOpenHouse
}

// Render is used to render open house the response
func (o *PublicOpenHouseResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

// NewPublicOpenHouseResponse creates a new instance of PublicOpenHouseResponse
func NewPublicOpenHouseResponse(publicOpenHouse *types.PublicOpenHouse) *PublicOpenHouseResponse {
	return &PublicOpenHouseResponse{PublicOpenHouse: publicOpenHouse}
}
