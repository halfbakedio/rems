package services

import (
	"github.com/halfbakedio/rems/services/properties/models"
)

// ListingService is a service for listings
type ListingService struct{}

// NewListingService returns a new ListingService
func NewListingService() *ListingService {
	return &ListingService{}
}

// Create creates a new listing
func (s *ListingService) Create(listing *models.Listing) error {
	if err := models.DB.Create(listing); err != nil {
		return err
	}
	return nil
}

// Read returns a listing by ID
func (s *ListingService) Read(id int) (*models.Listing, error) {
	listing := &models.Listing{}
	if err := models.DB.Find(listing, id); err != nil {
		return nil, err
	}
	return listing, nil
}

// List returns a list of listings
func (s *ListingService) List() ([]*models.Listing, error) {
	var listings []*models.Listing
	if err := models.DB.All(&listings); err != nil {
		return nil, err
	}
	return listings, nil
}

// Update updates a listing
func (s *ListingService) Update(listing *models.Listing) error {
	if err := models.DB.Update(listing); err != nil {
		return err
	}
	return nil
}

// Delete deletes a listing by ID
func (s *ListingService) Delete(id int) error {
	listing := &models.Listing{ID: id}
	if err := models.DB.Destroy(listing); err != nil {
		return err
	}
	return nil
}
