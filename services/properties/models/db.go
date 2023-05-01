package models

import (
	"log"

	"github.com/halfbakedio/rems/services/properties/utils"

	"github.com/gobuffalo/pop/v6"
)

// DB is a connection to your database to be used throughout your application.
var DB *pop.Connection

func init() {
	var err error

	env := utils.GetEnv("GO_ENV", "development")

	DB, err = pop.Connect(env)
	if err != nil {
		log.Fatal(err)
	}

	pop.Debug = env == "development"
}
