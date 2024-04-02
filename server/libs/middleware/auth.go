package middleware

import "github.com/gofiber/fiber/v2"

func ApiHandler(c *fiber.Ctx) error {
	return c.Next()
}

func Version(c *fiber.Ctx) error {
	return c.Next()
	// .SendStatus(fiber.StatusOK)
}
