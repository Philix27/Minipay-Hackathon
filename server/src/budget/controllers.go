package budget

import (
	"github.com/gofiber/fiber/v2"
)

var list = []budget{}

type Controllers struct {
	service iService
}

func NewControllers(svc iService) iRoutes {
	return &Controllers{
		service: svc,
	}
}

// create implements iRoutes.
func (*Controllers) create(c *fiber.Ctx) error {

	body := &budget{}

	if err := c.BodyParser(body); err != nil {
		return err
	}

	body.Id = len(list) + 1

	list = append(list, *body)

	return c.JSON(list)

}

// deleteOne implements iRoutes.
func (*Controllers) deleteOne(c *fiber.Ctx) error {
	panic("unimplemented")
}

// getAll implements iRoutes.
func (*Controllers) getAll(c *fiber.Ctx) error {
	panic("unimplemented")
}

// getOne implements iRoutes.
func (*Controllers) getOne(c *fiber.Ctx) error {
	panic("unimplemented")
}

// update implements iRoutes.
func (*Controllers) update(c *fiber.Ctx) error {
	panic("unimplemented")
}
