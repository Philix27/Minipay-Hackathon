package invoice

type dto_Create struct {
	Name          string `json:"name"`
	Description   string `json:"description"`
	BusinessName  string `json:"business_name"`
	ClientName    string `json:"client_name"`
	ClientAddress string `json:"client_address"`
	Amount        uint   `json:"amount"`
}

type budget struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

type updateBudgetDto struct {
	Id       int    `validate:"required"`
	Title    string `validate:"required"`
	Subtitle string
}
type budgetResponseDto struct {
	Id       int    `validate:"required"`
	Title    string `validate:"required"`
	Subtitle string
}
