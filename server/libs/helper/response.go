package helper

type Response struct {
	Code   int `json: "code"`
	Status int `json: "status"`
	Data   int `json: "data, omitempty"`
}
