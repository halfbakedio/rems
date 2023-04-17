package user

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/clerkinc/clerk-sdk-go/clerk"
)

func Me() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		ctx := req.Context()
		client := ctx.Value("clerk").(clerk.Client)

		sessClaims, ok := ctx.Value(clerk.ActiveSessionClaims).(*clerk.SessionClaims)
		log.Printf("%+v\n", sessClaims)
		if !ok {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))

			return
		}

		user, err := client.Users().Read(sessClaims.Claims.Subject)
		log.Printf("%+v\n", user)
		if err != nil {
			panic(err)
		}

		jsonResp, err := json.Marshal(user)
		if err != nil {
			log.Fatalf("Error happened in JSON marshal. Err: %s", err)
		}

		w.WriteHeader(http.StatusOK)

		if _, err = w.Write(jsonResp); err != nil {
			log.Fatalf("Error while writing to response. Err: %s", err)
		}
	}
}

func List() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		ctx := req.Context()
		client := ctx.Value("clerk").(clerk.Client)

		w.Header().Set("Content-Type", "application/json")

		limit := 25
		offset := 0
		params := clerk.ListAllUsersParams{
			Limit:  &limit,
			Offset: &offset,
		}
		users, err := client.Users().ListAll(params)
		if err != nil {
			log.Fatalf("Error happened while reading users. Err: %s", err)
			w.WriteHeader(http.StatusBadGateway)
		}

		jsonResp, err := json.Marshal(users)
		if err != nil {
			log.Fatalf("Error happened in JSON marshal. Err: %s", err)
		}

		w.WriteHeader(http.StatusOK)

		if _, err = w.Write(jsonResp); err != nil {
			log.Fatalf("Error while writing to response. Err: %s", err)
		}
	}
}

func Create() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{}"))
	}
}

func Search() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{}"))
	}
}

func Get() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{}"))
	}
}

func Update() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{}"))
	}
}

func Delete() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{}"))
	}
}

func Roles() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{}"))
	}
}
