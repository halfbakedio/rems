package models

import (
	"time"
)

// XXX: consider adding fields for
// - type (rental, sale)
// - status (active, pending, sold)
// - price
// - date
// - description
// - photos
// - videos
// - documents

// Listing is the model for the listing table
type Listing struct {
	ID             int       `db:"id" json:"id"`
	UserID         string    `db:"user_id" json:"user_id"`
	OrganizationID string    `db:"organization_id" json:"organization_id"`
	PropertyID     int       `db:"property_id" json:"property_id"`
	CreatedAt      time.Time `db:"created_at" json:"created_at"`
	UpdatedAt      time.Time `db:"updated_at" json:"updated_at"`

	Property   *Property   `json:"property,omitempty" belongs_to:"property"`
	OpenHouses []OpenHouse `json:"open_houses,omitempty" has_many:"open_houses"`
}

// Listings is a slice of Listing
type Listings []*Listing
