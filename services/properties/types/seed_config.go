package types

import (
	"bytes"
	"encoding/json"
	"text/template"

	"github.com/halfbakedio/rems/services/properties/models"
	"github.com/halfbakedio/rems/services/properties/utils"
)

// SeedConfig is the struct that holds the seed config
type SeedConfig struct {
	UserID         string `json:"-"`
	OrganizationID string `json:"-"`

	Properties []*models.Property `json:"properties"`
}

// NewSeedConfig returns a new SeedConfig struct
func NewSeedConfig() *SeedConfig {
	return &SeedConfig{
		UserID:         utils.GetEnv("USER_ID", ""),
		OrganizationID: utils.GetEnv("ORGANIZATION_ID", ""),
	}
}

// Load loads the seed config from the template file
func (s *SeedConfig) Load() error {
	var tmpl *template.Template
	var buf bytes.Buffer

	tmpl, err := template.ParseFiles("migrations/seeds/development.json")
	if err != nil {
		return err
	}

	if err := tmpl.Execute(&buf, s); err != nil {
		return err
	}

	if err := json.Unmarshal(buf.Bytes(), s); err != nil {
		return err
	}

	return nil
}
