package controllers

import (
	"errors"
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/halfbakedio/rems/services/properties/api/responses"
	"github.com/halfbakedio/rems/services/properties/services"
	"github.com/halfbakedio/rems/services/properties/types"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/render"
)

type OpenHouseController struct {
	service *services.OpenHouseService
}

func NewOpenHouseController() *OpenHouseController {
	return &OpenHouseController{
		service: services.NewOpenHouseService(),
	}
}

func (o *OpenHouseController) List(
	w http.ResponseWriter,
	req *http.Request,
) {
	err := errors.New("test")
	render.Render(w, req, responses.ErrRender(err))
}

func (o *OpenHouseController) ReadPublic(
	w http.ResponseWriter,
	req *http.Request,
) {
	id, err := strconv.Atoi(chi.URLParam(req, "id"))
	if err != nil {
		render.Render(w, req, responses.ErrRender(err))
		return
	}

	// retrieve the Authorization header from the request
	key := strings.Split(req.Header.Get("Authorization"), " ")[1]
	fullKey := fmt.Sprintf("open_house_%s", key)

	tokenService := services.NewTokenService()
	token, err := tokenService.ReadByKey(fullKey)
	if err != nil {
		render.Render(w, req, responses.ErrRead(err))
		return
	}

	openHouse, err := o.service.ReadPublic(id, &types.User{ID: token.UserID})
	if err != nil {
		render.Render(w, req, responses.ErrRead(err))
		return
	}

	err = render.Render(w, req, responses.NewPublicOpenHouseResponse(openHouse))
	if err != nil {
		render.Render(w, req, responses.ErrRender(err))
		return
	}
}
