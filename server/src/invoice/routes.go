package invoice

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func Setup(router fiber.Router, db *gorm.DB) {

	repo := NewRepository(db)

	handler := NewControllers(repo)

	router.Route("/invoice", func(router fiber.Router) {
		router.Post("/", handler.create).Name("createInvoice")
		router.Get("/", handler.getAll).Name("getInvoices")
		router.Get("/:id", handler.getOne).Name("getOneInvoice")
		router.Get("/:id", handler.deleteOne).Name("deleteInvoice")
		router.Get("/", handler.update).Name("updateInvoice")
	})
}
