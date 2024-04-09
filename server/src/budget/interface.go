package budget

import (
	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	Create(data createBudgetDto) error
	Update(data updateBudgetDto) error
	Delete(dataId int) error
	FindById(dataId int) (budget, error)
	FindAll() ([]budget, error)
}

type iService interface {
	Create(data createBudgetDto)
	Update(data updateBudgetDto)
	Delete(dataId int)
	FindById(dataId int) (data budgetResponseDto, err error)
	FindAll() ([]budgetResponseDto, error)
}

type iRoutes interface {
	create(c *fiber.Ctx) error
	update(c *fiber.Ctx) error
	getAll(c *fiber.Ctx) error
	getOne(c *fiber.Ctx) error
	deleteOne(c *fiber.Ctx) error
}
