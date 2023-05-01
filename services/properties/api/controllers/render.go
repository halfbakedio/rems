package controllers

import (
	"github.com/halfbakedio/rems/services/properties/api/responses"

	"github.com/go-chi/render"
)

func ErrRender(err error) render.Renderer {
	return &responses.ErrResponse{
		Err:            err,
		HTTPStatusCode: 422,
		StatusText:     "Error rendering response.",
		AppCode:        0,
		ErrorText:      err.Error(),
	}
}
