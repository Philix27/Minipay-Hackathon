package invoice

import (
	"errors"

	"pay3/libs/database"
	"pay3/libs/helper"

	"gorm.io/gorm"
)

type Repository struct {
	Db *gorm.DB
}

func NewRepository(db *gorm.DB) iRepository {
	return &Repository{Db: db}
}

// Create implements iRepository.
func (r *Repository) Create(data createBudgetDto) {
	model := database.Budgets{
		Name: data.Title,
	}
	result := r.Db.Create(&model)
	helper.ErrorPanic(result.Error, "Create budget")
}

// Delete implements iRepository.
func (r *Repository) Delete(dataId int) {
	result := r.Db.Where("id = ?", dataId).Delete(new(budget))
	helper.ErrorPanic(result.Error, "Delete budget")
}

// FindAll implements iRepository.
func (r *Repository) FindAll() (list []budget) {
	var announceList []budget
	result := r.Db.Find(&announceList)
	helper.ErrorPanic(result.Error, "Find all budget")
	return announceList
}

// FindById implements iRepository.
func (r *Repository) FindById(dataId int) (data budget, err error) {
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
func (r *Repository) Update(data updateBudgetDto) {
	var updateAn = updateBudgetDto{
		Title: data.Subtitle,
		Id:    int(data.Id),
	}

	result := r.Db.Model(&data).Updates(updateAn)
	helper.ErrorPanic(result.Error, "Update invoice")
}
