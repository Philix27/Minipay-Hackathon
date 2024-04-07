package app

import (
	"pay3/libs/middleware"
	"pay3/src/budget"
	"pay3/src/invoice"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/swagger"
)

func (state AppState) SetupRoutes(app *fiber.App) {
	api := app.Group("/api", middleware.ApiHandler) // /api
	v1 := api.Group("/v1", middleware.Version)      // /api/v1

	budget.Setup(v1, state.DB)
	invoice.Setup(v1, state.DB)

	app.Get("/swagger/*", swagger.HandlerDefault) // default

}
