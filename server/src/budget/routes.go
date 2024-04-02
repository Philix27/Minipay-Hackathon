package budget

import (
	"github.com/gofiber/fiber/v2"
)

var list = []announcement{}

type Routes struct {
	service iService
}

func NewRoutes(svc iService) iRoutes {
	return &Routes{
		service: svc,
	}
}

func (r *Routes) create(route fiber.Router) {
	route.Post("/", func(c *fiber.Ctx) error {
		body := &announcement{}

		if err := c.BodyParser(body); err != nil {
			return err
		}

		body.Id = len(list) + 1

		list = append(list, *body)

		return c.JSON(list)
	}).Name("AnnouncementCreate")

}

func (r *Routes) update(c *fiber.Ctx) error {
	id, err := c.ParamsInt("id")

	if err != nil {
		c.Status(401).SendString("Invalid id")
	}

	for i, j := range list {
		if j.Id == id {
			list[i].Title = ""
			break
		}
	}
	return c.JSON(list)
}

func (r *Routes) deleteOne(c *fiber.Ctx) error {
	return c.SendString("Delete one announcement")
}
func (r *Routes) getAll(c *fiber.Ctx) error {
	return c.JSON(list)
}
func (r *Routes) getOne(c *fiber.Ctx) error {
	return c.SendString("Get one announcement")
}
