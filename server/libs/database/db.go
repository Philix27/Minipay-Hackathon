package database

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type DbConfig struct {
	Host     string
	Port     string
	Password string
	User     string
	DbName   string
	SSLMode  string
}

func DbNewConnection(config *DbConfig) (*gorm.DB, error) {

	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             time.Second,   // Slow SQL threshold
			LogLevel:                  logger.Silent, // Log level
			IgnoreRecordNotFoundError: true,          // Ignore ErrRecordNotFound error for logger
			ParameterizedQueries:      true,          // Don't include params in the SQL log
			Colorful:                  false,         // Disable color
		},
	)

	dsn := fmt.Sprintf("host=%s port=%s password=%s dbname=%s user=%s sslmode=%s",
		config.Host, config.Port, config.Password, config.DbName, config.User, config.SSLMode)

	// ref: https://gorm.io/docs/connecting_to_the_database.html#PostgreSQL
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: newLogger,
	})

	if err != nil {
		fmt.Println("Error connecting to database", err.Error())
		return db, err
	}

	return db, nil
}
