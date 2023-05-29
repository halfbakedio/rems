package models

import (
	"time"

	"github.com/gobuffalo/nulls"
)

// XXX: consider adding fields for:
// - type (residential, commercial)
// - address
// - bedrooms
// - bathrooms
// - square footage
// - lot size
// - year built
// - parking
// - heating
// - cooling
// - stories
// - basement
// - roof
// - exterior
// - foundation
// - schools
// - neighborhood
// - walk score
// - transit score
// - bike score
// - amenities
// - contacts

// Property is the model for the property table
type Property struct {
	ID             int          `db:"id" json:"id"`
	UserID         string       `db:"user_id" json:"user_id"`
	OrganizationID string       `db:"organization_id" json:"organization_id"`
	ImageURI       nulls.String `db:"image_uri" json:"image_uri,omitempty"`
	CreatedAt      time.Time    `db:"created_at" json:"created_at"`
	UpdatedAt      time.Time    `db:"updated_at" json:"updated_at"`

	Listings []Listing `json:"listings,omitempty" has_many:"listings"`
}

// Properties is a slice of Property
type Properties []*Property
