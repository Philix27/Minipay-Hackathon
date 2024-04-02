package helper

import "log"

func ErrorPanic(err error, msg string) {
	if err != nil {
		log.Panicln(msg, " : ", err)
	}
}
