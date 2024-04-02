package budget

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
func (r *Repository) Create(data createAnnouncementDto) {
	model := database.Announcement{
		Title: data.Title,
	}
	result := r.Db.Create(&model)
	helper.ErrorPanic(result.Error, "Create announcement")
}

// Delete implements iRepository.
func (r *Repository) Delete(dataId int) {
	result := r.Db.Where("id = ?", dataId).Delete(new(announcement))
	helper.ErrorPanic(result.Error, "Delete announcement")
}

// FindAll implements iRepository.
func (r *Repository) FindAll() (list []announcement) {
	var announceList []announcement
	result := r.Db.Find(&announceList)
	helper.ErrorPanic(result.Error, "Find all announcement")
	return announceList
}

// FindById implements iRepository.
func (r *Repository) FindById(dataId int) (data announcement, err error) {
	var announcementItem database.Announcement
	result := r.Db.Find(&announcementItem, dataId)

	res := announcement{
		Title:    announcementItem.Title,
		Subtitle: announcementItem.Subtitle,
	}

	if result != nil {
		return res, nil
	} else {
		return res, errors.New("Announcement not found")
	}

}

// Update implements iRepository.
func (r *Repository) Update(data updateAnnouncementDto) {
	var updateAn = updateAnnouncementDto{
		Title: data.Subtitle,
		Id:    int(data.Id),
	}

	result := r.Db.Model(&data).Updates(updateAn)
	helper.ErrorPanic(result.Error, "Update announcement")
}
