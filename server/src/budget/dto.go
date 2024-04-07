package budget

type budget struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

type createBudgetDto struct {
	Title    string `validate:"required, min=1, max=10" json:"name" `
	Subtitle string `validate:"required"`
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
