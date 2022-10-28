package routes

import (
	"github.com/gofiber/fiber/v2"

	// "github.com/halfbakedio/rems/services/tasks/database"
	"github.com/halfbakedio/rems/services/tasks/models"
)

type Response struct {
	Data interface{} `json:"data"`
}

func Create(c *fiber.Ctx) error {
	task := new(models.Task)

	if err := c.BodyParser(task); err != nil {
		return c.Status(400).JSON(err.Error())
	}

	// database.DB.Db.Create(&task)

	return c.Status(200).JSON(Response{Data: task})
}

func Read(c *fiber.Ctx) error {
	tasks := []models.Task{
		models.Task{
			Title: "derp",
			Body:  "dorp",
		},
	}
	id, err := c.ParamsInt("id", 0)

	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	if id == 0 {
		// database.DB.Db.Find(&tasks)
		return c.Status(200).JSON(Response{Data: tasks})
	} else {
		// database.DB.Db.Where("id = ?", id).Find(&task)
		return c.Status(200).JSON(Response{Data: tasks[0]})
	}
}

func Update(c *fiber.Ctx) error {
	// task := []models.Task{}
	task := []models.Task{
		models.Task{
			Title: "derp",
			Body:  "dorp",
		},
	}
	// updateTask := new(models.Task)
	// id, err := c.ParamsInt("id")
	//
	// if err != nil {
	// 	return c.Status(400).JSON(err.Error())
	// }
	//
	// if errParser := c.BodyParser(updateTask); err != nil {
	// 	return c.Status(400).JSON(errParser.Error())
	// }

	// database.DB.Db.Model(&task).Where("id = ?", id).Update("title", updateTask.Title)

	return c.Status(200).JSON(Response{Data: task})
}

func Delete(c *fiber.Ctx) error {
	// task := []models.Task{}
	id, err := c.ParamsInt("id")

	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	// database.DB.Db.Where("id = ?", id).Delete(&task)

	response := struct{ id int }{id: id}

	return c.Status(200).JSON(response)
}
