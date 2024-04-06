package invoice

import (
	"pay3/libs/helper"

	"github.com/go-playground/validator"
)

type Service struct {
	repository iRepository
	validate   *validator.Validate

}

func NewService(repository iRepository, validate *validator.Validate) iService {
	return &Service{
		repository: repository,
		validate:   validate,
		// newRepo: repository,
	}
}

// Create implements iService.
func (s *Service) Create(data createBudgetDto) {
	err := s.validate.Struct(data)
	helper.ErrorPanic(err, "Create invoice service")
	
	s.repository.Create(data)
}

// FindAll implements iService.
func (s *Service) FindAll() (list []budgetResponseDto) {
	result := s.repository.FindAll()

	var budgetList []budgetResponseDto

	for _, val := range result {
		an := budgetResponseDto{
			Id:    int(val.Id),
			Title: val.Title,
		}
		budgetList = append(budgetList, an)
	}

	return budgetList
}

// FindById implements iService.
func (s *Service) FindById(dataId int) (data budgetResponseDto, err error) {
	budgetData, err := s.repository.FindById(dataId)

	helper.ErrorPanic(err, "FindById budget service")

	response := budgetResponseDto{
		Id:       int(budgetData.Id),
		Title:    budgetData.Title,
		Subtitle: budgetData.Subtitle,
	}

	return response, err
}

// Update implements iService.
func (s *Service) Update(data updateBudgetDto) {
	s.repository.Update(data)
}

// Delete implements iService.
func (s *Service) Delete(dataId int) {
	s.repository.Delete(dataId)
}
