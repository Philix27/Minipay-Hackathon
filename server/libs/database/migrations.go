package database

import (
	"gorm.io/gorm"
)

// The order of which you run the migrations matters
// User first, workspace next
func RunMigrations(db *gorm.DB) {
	err := db.AutoMigrate(
		User{},
		Budgets{},
		Invoice{},
		InvoiceItem{},
		Transactions{},
		Wallets{},
		// PaymentLink{},
	)

	if err != nil {
		println("Could not run migrations, %v", err.Error())
	}
}
