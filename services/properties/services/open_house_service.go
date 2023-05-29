package services

import (
	"errors"

	"github.com/halfbakedio/rems/services/properties/models"
	"github.com/halfbakedio/rems/services/properties/types"

	"github.com/gobuffalo/pop/v6"
)

// OpenHouseService is a service for open houses
type OpenHouseService struct{}

// NewOpenHouseService returns a new instance of OpenHouseService
func NewOpenHouseService() *OpenHouseService {
	return &OpenHouseService{}
}

// Create creates a new open house
func (s *OpenHouseService) Create(openHouse *models.OpenHouse) error {
	if err := models.DB.Create(openHouse); err != nil {
		return err
	}
	return nil
}

// Read returns a single open house
func (o *OpenHouseService) ReadPublic(id int, user *types.User) (*types.PublicOpenHouse, error) {
	var err error
	var tx *pop.Connection
	openHouse := &models.OpenHouse{}
	property := &models.Property{}

	if user != nil {
		tx, err = models.DB.NewTransaction()
		if err != nil {
			return nil, err
		}

		err = tx.Eager().Scope(models.ByUser(user.ID)).Find(openHouse, id)
		err = tx.Eager().Scope(models.ByUser(user.ID)).Find(property, openHouse.Listing.PropertyID)
	} else {
		return nil, errors.New("user is nil")
	}

	if err != nil {
		return nil, err
	}

	result := &types.PublicOpenHouse{
		ID:               openHouse.ID,
		ListingID:        openHouse.Listing.ID,
		PropertyID:       property.ID,
		PropertyImageURI: property.ImageURI,
	}

	return result, nil
}
