package invoice

import "github.com/gofiber/fiber/v2"

// type iRepository interface {
// 	Create(data createBudgetDto)
// 	Update(data updateBudgetDto)
// 	Delete(dataId int)
// 	FindById(dataId int) (data budget, err error)
// 	FindAll() (list []budget)
// }

// type iService interface {
// 	Create(data createBudgetDto) createBudgetDto
// 	Update(data updateBudgetDto)
// 	Delete(dataId int)
// 	FindById(dataId int) (data budgetResponseDto, err error)
// 	FindAll() (list []budgetResponseDto)
// }

type iRoutes interface {
	create(c *fiber.Ctx) error
	update(c *fiber.Ctx) error
	getAll(c *fiber.Ctx) error
	getOne(c *fiber.Ctx) error
	deleteOne(c *fiber.Ctx) error
}
