package services

import (
	"github.com/halfbakedio/rems/services/properties/models"
)

// PropertyService is a service for properties
type PropertyService struct{}

// NewPropertyService returns a new PropertyService
func NewPropertyService() *PropertyService {
	return &PropertyService{}
}

// Create creates a new property
func (s *PropertyService) Create(property *models.Property) error {
	if err := models.DB.Create(property); err != nil {
		return err
	}
	return nil
}

// Read returns a property by ID
func (s *PropertyService) Read(id int) (*models.Property, error) {
	property := &models.Property{}
	if err := models.DB.Find(property, id); err != nil {
		return nil, err
	}
	return property, nil
}

// List returns a list of properties
func (s *PropertyService) List() ([]*models.Property, error) {
	var properties []*models.Property
	if err := models.DB.All(&properties); err != nil {
		return nil, err
	}
	return properties, nil
}

// Update updates a property
func (s *PropertyService) Update(property *models.Property) error {
	if err := models.DB.Update(property); err != nil {
		return err
	}
	return nil
}

// Delete deletes a property by ID
func (s *PropertyService) Delete(id int) error {
	property := &models.Property{ID: id}
	if err := models.DB.Destroy(property); err != nil {
		return err
	}
	return nil
}
