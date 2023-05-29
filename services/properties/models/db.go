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

// ByUser scopes a query to a user
func ByUser(userId string) pop.ScopeFunc {
	return func(q *pop.Query) *pop.Query {
		return q.Where("user_id = ?", userId)
	}
}

// ByOrganization scopes a query to an organization
func ByOrganization(organizationId string) pop.ScopeFunc {
	return func(q *pop.Query) *pop.Query {
		return q.Where("organization_id = ?", organizationId)
	}
}
