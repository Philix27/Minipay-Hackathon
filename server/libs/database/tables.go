package database

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email        string
	Password     string
	AccessToken  string
	RefreshToken string
	TeamID       uint
}
type Wallets struct {
	gorm.Model
	WalletAddress string
}

type Budgets struct {
	gorm.Model
	Name        string
	Description string
}

type Invoice struct {
	gorm.Model
	Name          string
	Description   string
	BusinessName  string
	ClientName    string
	ClientAddress string
	Amount        uint
	Items         []InvoiceItem
}

type InvoiceItem struct {
	gorm.Model
	Name      string
	Quantity  uint
	Amount    uint
	InvoiceID uint
}

type Transactions struct {
	gorm.Model
}

type PaymentLinkStatus string

const (
	Pending    PaymentLinkStatus = "pending"
	Approved   PaymentLinkStatus = "approved"
	InProgress PaymentLinkStatus = "in_progress"
)

type PaymentLink struct {
	gorm.Model
	Amount uint
	Name   string
	Status PaymentLinkStatus `gorm:"type:enum('pending', 'approved', 'in_progress')"`
}
