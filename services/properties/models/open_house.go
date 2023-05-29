package models

import (
	"time"
)

// OpenHouse is the model for the open_house table
type OpenHouse struct {
	ID             int       `db:"id" json:"id"`
	UserID         string    `db:"user_id" json:"user_id"`
	OrganizationID string    `db:"organization_id" json:"organization_id"`
	ListingID      int       `db:"listing_id" json:"listing_id"`
	CreatedAt      time.Time `db:"created_at" json:"created_at"`
	UpdatedAt      time.Time `db:"updated_at" json:"updated_at"`

	Listing *Listing `json:"listing,omitempty" belongs_to:"listing"`
}

// OpenHouses is a slice of OpenHouse
type OpenHouses []*OpenHouse
