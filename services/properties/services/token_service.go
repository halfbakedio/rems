package services

import (
	"github.com/halfbakedio/rems/services/properties/models"
)

// TokenService is a service for tokens
type TokenService struct{}

// NewTokenService returns a new instance of TokenService
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

// Read returns a token by ID
func (s *TokenService) Read(id int) (*models.Token, error) {
	token := &models.Token{}
	if err := models.DB.Find(token, id); err != nil {
		return nil, err
	}
	return token, nil
}

// ReadByKey returns a token by key
func (s *TokenService) ReadByKey(key string) (*models.Token, error) {
	token := &models.Token{}
	if err := models.DB.Scope(token.ByKey(key)).First(token); err != nil {
		return nil, err
	}
	return token, nil
}

// List returns all tokens
func (s *TokenService) List() ([]models.Token, error) {
	var tokens []models.Token
	if err := models.DB.All(&tokens); err != nil {
		return nil, err
	}
	return tokens, nil
}

// ListByUser returns all tokens for a user
func (s *TokenService) ListByUser(userId string) ([]models.Token, error) {
	var tokens []models.Token
	if err := models.DB.Scope(models.ByUser(userId)).All(&tokens); err != nil {
		return nil, err
	}
	return tokens, nil
}

// Update updates a token
func (s *TokenService) Update(token *models.Token) error {
	if err := models.DB.Update(token); err != nil {
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
