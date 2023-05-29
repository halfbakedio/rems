package types

import (
	"github.com/gobuffalo/nulls"
)

// PublicOpenHouse is a type for public open house information
type PublicOpenHouse struct {
	ID               int          `json:"id"`
	ListingID        int          `json:"listing_id"`
	PropertyID       int          `json:"property_id"`
	PropertyImageURI nulls.String `json:"property_image_uri,omitempty"`
}
