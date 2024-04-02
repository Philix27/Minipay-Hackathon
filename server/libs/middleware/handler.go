package middleware

import "github.com/gofiber/fiber/v2"

func Protected(c *fiber.Ctx) error {
	return c.Next()
}
