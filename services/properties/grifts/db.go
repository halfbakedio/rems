package grifts

import (
	"encoding/json"
	"errors"
	"fmt"
	"strconv"

	"github.com/halfbakedio/rems/services/properties/models"
	"github.com/halfbakedio/rems/services/properties/services"
	"github.com/halfbakedio/rems/services/properties/types"

	"github.com/gobuffalo/grift/grift"
)

var _ = grift.Namespace("db", func() {
	grift.Desc("seed", "Seeds a database")
	grift.Add("seed", func(c *grift.Context) error {
		config := types.NewSeedConfig()
		if err := config.Load(); err != nil {
			return err
		}

		fmt.Println("Seeding database...\n")

		propertyService := services.NewPropertyService()
		property := config.Properties[0]
		if err := propertyService.Create(property); err != nil {
			return err
		}

		listingService := services.NewListingService()
		listing := property.Listings[0]
		listing.PropertyID = property.ID
		if err := listingService.Create(&listing); err != nil {
			return err
		}

		openHouseService := services.NewOpenHouseService()
		openHouse := listing.OpenHouses[0]
		openHouse.ListingID = listing.ID
		if err := openHouseService.Create(&openHouse); err != nil {
			return err
		}

		properties, _ := json.MarshalIndent(config.Properties[0], "", " ")
		fmt.Println(string(properties))

		return nil
	})

	var _ = grift.Namespace("token", func() {
		grift.Desc("create", "Creates a new temporary token")
		grift.Add("create", func(c *grift.Context) error {
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

		grift.Desc("delete", "Deletes a temporary token")
		grift.Add("delete", func(c *grift.Context) error {
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

		grift.Desc("list", "Lists all temporary tokens")
		grift.Add("list", func(c *grift.Context) error {
			service := services.NewTokenService()
			tokens, err := service.List()
			if err != nil {
				return err
			}

			for _, token := range tokens {
				fmt.Println(token)
			}

			return nil
		})

		grift.Desc("list:user", "Lists all temporary tokens for a user")
		grift.Add("list:user", func(c *grift.Context) error {
			if len(c.Args) < 1 {
				return errors.New("a user ID is required")
			}

			service := services.NewTokenService()
			tokens, err := service.ListByUser(c.Args[0])
			if err != nil {
				return err
			}

			for _, token := range tokens {
				fmt.Println(token)
			}

			return nil
		})

		grift.Desc("read", "Reads a temporary token")
		grift.Add("read", func(c *grift.Context) error {
			if len(c.Args) < 1 {
				return errors.New("an token ID is required")
			}

			service := services.NewTokenService()
			id, _ := strconv.Atoi(c.Args[0])
			token, err := service.Read(id)

			if err != nil {
				return err
			}

			fmt.Println(token)

			return nil
		})
	})
})
