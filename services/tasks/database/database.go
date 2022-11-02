package database

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	"github.com/halfbakedio/rems/services/tasks/models"
	"github.com/halfbakedio/rems/services/tasks/utils"
)

type DBInstance struct {
	DB *gorm.DB
}

var Connection DBInstance

func ConnectDB() {
	host := utils.GetEnv("DB_HOST", "localhost")
	port := utils.GetEnv("DB_PORT", "5432")
	user := utils.GetEnv("DB_USER", "postgres")
	password := utils.GetEnv("DB_PASSWORD", "postgres")
	database := utils.GetEnv("TASKS_DATABASE", "tasks_dev")
	timezone := utils.GetEnv("TIMEZONE", "UTC")

	dsn := fmt.Sprintf(
		"host=%s user=%s password='%s' dbname=%s port=%s sslmode=disable TimeZone=%s",
		host,
		user,
		password,
		database,
		port,
		timezone,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})

	if err != nil {
		log.Fatal("Failed to connect to database. \n", err)
		os.Exit(2)
	}

	log.Println("connected")
	db.Logger = logger.Default.LogMode(logger.Info)
	log.Println("running migrations")
	db.AutoMigrate(&models.Task{})

	Connection = DBInstance{
		DB: db,
	}
}
