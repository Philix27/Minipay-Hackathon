package invoice

import (
	"pay3/libs/database"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

var list = []budget{}

type Controllers struct {
	repo Repository
}

func NewControllers(repository Repository) iRoutes {
	return &Controllers{
		repo: repository,
	}
}

type Response struct {
	Message string `json:"message"`
	Payload string `json:"payload"`
}

// create implements iRoutes.
func (a *Controllers) create(c *fiber.Ctx) error {

	body := &dto_Create{}

	if err := c.BodyParser(body); err != nil {
		return err
	}

	res, err := a.repo.Create(*body)

	sm := Response{Message: "oops an error occurred"}

	if err != nil {
		return c.JSON(&sm)
	}

	return c.Status(201).JSON(Response{
		Message: "SUCCESS",
		Payload: "created invoice with id " + strconv.Itoa(int(res)),
	})
}

// getAll implements iRoutes.
func (a *Controllers) getAll(c *fiber.Ctx) error {

	res, err := a.repo.FindAll()

	sm := Response{Message: "oops an error occurred"}

	if err != nil {
		return c.JSON(&sm)
	}

	data := map[string][]database.Invoice{
		"payload": res,
	}

	return c.Status(201).JSON(data)

}

// getOne implements iRoutes.
func (*Controllers) getOne(c *fiber.Ctx) error {
	panic("unimplemented")
}

// update implements iRoutes.
func (*Controllers) update(c *fiber.Ctx) error {
	panic("unimplemented")
}

// deleteOne implements iRoutes.
func (*Controllers) deleteOne(c *fiber.Ctx) error {
	panic("unimplemented")
}
