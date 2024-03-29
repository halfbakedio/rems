package models

import (
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/gobuffalo/pop/v6"
	"github.com/gofrs/uuid"
	"golang.org/x/crypto/bcrypt"
)

// Token is the model for the token
type Token struct {
	ID        int       `db:"id"`
	UserID    string    `db:"user_id"`
	Key       string    `db:"key"`
	Secret    string    `db:"secret"`
	ExpiresAt time.Time `db:"expires_at"`
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}

// Tokens is a slice of Token
type Tokens []*Token

// NewToken creates a token instance
func NewToken(userID, category, secret string) Token {
	uuid, err := uuid.NewV4()
	if err != nil {
		log.Fatalf("failed to generate UUID: %s", err)
	}

	id := strings.Replace(uuid.String(), "-", "", -1)
	key := fmt.Sprintf("%s_%s", category, id)
	now := time.Now().UTC()

	hash, err := bcrypt.GenerateFromPassword([]byte(secret), bcrypt.DefaultCost)
	if err != nil {
		log.Fatalf("failed to generate secret hash: %s", err)
	}

	return Token{
		UserID:    userID,
		Key:       key,
		Secret:    string(hash),
		ExpiresAt: now.Add(24 * 14 * time.Hour),
	}
}

func (t *Token) ByKey(key string) pop.ScopeFunc {
	return func(q *pop.Query) *pop.Query {
		return q.Where("key = ?", key)
	}
}
