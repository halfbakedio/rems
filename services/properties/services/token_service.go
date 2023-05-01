package services

import "github.com/halfbakedio/rems/services/properties/models"

// TokenService service layer
type TokenService struct{}

// NewTokenService creates a new token service
func NewTokenService() *TokenService {
	return &TokenService{}
}

// Create creates a new token
func (s *TokenService) Create(token *models.Token) error {
	if err := models.DB.Create(token); err != nil {
		return err
	}
	return nil
}

// Delete removes a token by ID
func (s *TokenService) Delete(id int) error {
	token := &models.Token{ID: id}
	if err := models.DB.Destroy(token); err != nil {
		return err
	}
	return nil
}
