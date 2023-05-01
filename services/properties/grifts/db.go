package grifts

import (
	"errors"
	"strconv"

	"github.com/halfbakedio/rems/services/properties/models"
	"github.com/halfbakedio/rems/services/properties/services"

	"github.com/gobuffalo/grift/grift"
)

var _ = grift.Namespace("db", func() {
	grift.Desc("seed", "Seeds a database")
	grift.Add("seed", func(c *grift.Context) error {
		// Add DB seeding stuff here
		return nil
	})

	grift.Desc("create:token", "Creates a new temporary token")
	grift.Add("create:token", func(c *grift.Context) error {
		if len(c.Args) < 2 {
			return errors.New("valid user ID, scope, and secret arguments are required")
		}

		service := services.NewTokenService()
		token := models.NewToken(c.Args[0], c.Args[1], c.Args[2])

		if err := service.Create(&token); err != nil {
			return err
		}
		return nil
	})

	grift.Desc("delete:token", "Deletes a temporary token")
	grift.Add("delete:token", func(c *grift.Context) error {
		if len(c.Args) < 1 {
			return errors.New("an token ID is required")
		}

		service := services.NewTokenService()

		id, _ := strconv.Atoi(c.Args[0])
		if err := service.Delete(id); err != nil {
			return err
		}
		return nil
	})
})
