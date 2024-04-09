package invoice

import (
	"errors"

	"pay3/libs/database"

	"gorm.io/gorm"
)

type Repository struct {
	Db *gorm.DB
}

func NewRepository(db *gorm.DB) Repository {
	return Repository{Db: db}
}

// Create implements iRepository.
func (r *Repository) Create(data dto_Create) (uint, error) {

	model := database.Invoice{
		Name:          data.Name,
		Description:   data.Description,
		ClientName:    data.ClientName,
		ClientAddress: data.ClientAddress,
		BusinessName:  data.BusinessName,
		Amount:        data.Amount,
	}

	result := r.Db.Create(&model)

	if result.Error != nil {
		return 0, result.Error
	}
	return model.ID, nil
}

// Delete implements iRepository.
func (r *Repository) Delete(dataId int) error {
	result := r.Db.Where("id = ?", dataId).Delete(new(database.Invoice))
	if result.Error != nil {
		return result.Error
	}
	return nil
}

// FindAll implements iRepository.
func (r *Repository) FindAll() ([]database.Invoice, error) {
	var announceList []database.Invoice
	result := r.Db.Find(&announceList)

	if result.Error != nil {
		return announceList, result.Error
	}
	return announceList, nil
}

// FindById implements iRepository.
func (r *Repository) FindById(dataId int) (database.Invoice, error) {
	var model database.Budgets
	result := r.Db.Find(&model, dataId)

	res := database.Invoice{
		Name: model.Name,
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

	if result.Error != nil {
		return result.Error
	}
	return nil
}
