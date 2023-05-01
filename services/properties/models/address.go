package models

type Address struct {
	ID         int       `db:"id"`
	PropertyID int       `db:"property_id"`
	Property   *Property `belongs_to:"property"`
	Address1   string    `db:"address1"`
	Address2   string    `db:"address2"`
	Address3   string    `db:"address3"`
	City       string    `db:"city"`
	State      string    `db:"state"`
	Country    string    `db:"country"`
	ZipCode    string    `db:"zip_code"`
}
