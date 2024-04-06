package budget

import (
	"github.com/go-playground/validator"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func Setup(router fiber.Router, db *gorm.DB) {

	repo := NewRepository(db)

	svc := NewService(repo, validator.New())

	handler := NewControllers(svc)

	router.Route("/budgets", func(router fiber.Router) {
		router.Post("/", handler.create).Name("createBudget")
		router.Get("/", handler.getAll).Name("getBudgets")
		router.Get("/:id", handler.getOne).Name("getOneBudget")
		router.Get("/:id", handler.deleteOne).Name("deleteBudget")
		router.Get("/", handler.update).Name("updateBudget")
	})
}
