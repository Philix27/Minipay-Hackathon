package budget

import (
	"errors"

	"pay3/libs/database"

	"gorm.io/gorm"
)

type Repository struct {
	Db *gorm.DB
}

func NewRepository(db *gorm.DB) iRepository {
	return &Repository{Db: db}
}

// Create implements iRepository.
func (r *Repository) Create(data createBudgetDto) error {
	model := database.Budgets{
		Name: data.Title,
	}
	result := r.Db.Create(&model)
	return result.Error
	// helper.ErrorPanic(result.Error, "Create ")
}

// Delete implements iRepository.
func (r *Repository) Delete(dataId int) error {
	result := r.Db.Where("id = ?", dataId).Delete(new(budget))
	return result.Error
}

// FindAll implements iRepository.
func (r *Repository) FindAll() ([]budget, error) {
	var announceList []budget
	result := r.Db.Find(&announceList)
	// helper.ErrorPanic(result.Error, "Find all budget")
	return announceList, result.Error
}

// FindById implements iRepository.
func (r *Repository) FindById(dataId int) (budget, error) {
	var model database.Budgets
	result := r.Db.Find(&model, dataId)

	res := budget{
		Title:    model.Name,
		Subtitle: model.Description,
	}

	if result != nil {
		return res, nil
	} else {
		return res, errors.New(" not found")
	}

}

// Update implements iRepository.
func (r *Repository) Update(data updateBudgetDto) error {
	var updateAn = updateBudgetDto{
		Title: data.Subtitle,
		Id:    int(data.Id),
	}

	result := r.Db.Model(&data).Updates(updateAn)
	// helper.ErrorPanic(result.Error, "Update ")
	return result.Error
}
