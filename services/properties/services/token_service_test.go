package services_test

import (
	"testing"

	"github.com/halfbakedio/rems/services/properties/services"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
)

type TokenServiceSuite struct {
	suite.Suite
}

func (s *TokenServiceSuite) TestTokenService() {
	assert := assert.New(s.T())
	service := services.NewTokenService()

	assert.NotNil(service)
}

func TestTokenServiceSuite(t *testing.T) {
	suite.Run(t, new(TokenServiceSuite))
}
