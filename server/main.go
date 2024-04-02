package main

import (
	_ "pay3/docs"
	"pay3/libs/app"
	"pay3/libs/database"
	"pay3/libs/helper"

	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

// @title Harmony
// @version 1.0
// @description Harmony Backend Server
// @termsOfService http://swagger.io/terms/

// @contact.name Felix Eligbue
// @contact.email philixbob@gmail.com
// @contact.url    http://www.swagger.io/support

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:3111
// @BasePath /api/v1/

// @securityDefinitions.basic  BasicAuth

// @externalDocs.description  OpenAPI
// @externalDocs.url          https://swagger.io/resources/open-api/

func main() {
	err := godotenv.Load(".env")

	helper.ErrorPanic(err, "Could not load env")

	server := fiber.New(fiber.Config{
		Prefork:           false,
		CaseSensitive:     true,
		StrictRouting:     true,
		ServerHeader:      "Pay3 Server",
		AppName:           "Pay3",
		EnablePrintRoutes: true,
		IdleTimeout:       5,
		ReduceMemoryUsage: true,
	})

	server.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:1400",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	config := &database.DbConfig{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		Password: os.Getenv("DB_PASSWORD"),
		User:     os.Getenv("DB_USER"),
		SSLMode:  os.Getenv("DB_SSLMODE"),
		DbName:   os.Getenv("DB_NAME"),
	}

	db, err := database.DbNewConnection(config)
	if err != nil {
		println("An error occurred during db con")
	} else {
		log.Println("Database connection successful")
		println("Database connection successful")
	}
	helper.ErrorPanic(err, "Cannot connect to db")

	database.RunMigrations(db)

	appState := app.AppState{
		DB: db,
	}

	appState.SetupRoutes(server)

	helper.GenerateTypescriptPaths(server)

	log.Fatal(server.Listen(":" + os.Getenv("PORT")))
}
