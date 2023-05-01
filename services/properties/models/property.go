package models

import (
	"time"

	"github.com/gobuffalo/nulls"
)

// Property the property type
type Property struct {
	ID        int          `db:"id"`
	UserID    string       `db:"user_id"`
	OrgID     string       `db:"org_id"`
	ImageURI  nulls.String `json:"-" db:"image_uri"`
	CreatedAt time.Time    `db:"created_at"`
	UpdatedAt time.Time    `db:"updated_at"`
}

// Properties a list type for properties
type Properties []*Property
