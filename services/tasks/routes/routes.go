package routes

import (
	"github.com/gofiber/fiber/v2"

	"github.com/halfbakedio/rems/services/tasks/database"
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

	database.Connection.DB.Create(&task)

	return c.Status(200).JSON(Response{Data: task})
}

func Read(c *fiber.Ctx) error {
	tasks := []models.Task{}
	id, err := c.ParamsInt("id", 0)

	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	if id == 0 {
		database.Connection.DB.Find(&tasks)

		return c.Status(200).JSON(Response{Data: tasks})
	} else {
		database.Connection.DB.Where("id = ?", id).Find(&tasks)

		return c.Status(200).JSON(Response{Data: tasks[0]})
	}
}

func Update(c *fiber.Ctx) error {
	task := []models.Task{}
	updateTask := new(models.Task)
	id, err := c.ParamsInt("id")

	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	if errParser := c.BodyParser(updateTask); err != nil {
		return c.Status(400).JSON(errParser.Error())
	}

	updateFields := models.Task{
		Title: updateTask.Title,
		Body:  updateTask.Body,
	}

	database.Connection.DB.Model(
		&task,
	).Where(
		"id = ?", id,
	).Updates(
		updateFields,
	)

	return c.Status(200).JSON("updated")
}

func Delete(c *fiber.Ctx) error {
	task := []models.Task{}
	id, err := c.ParamsInt("id")

	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	database.Connection.DB.Where("id = ?", id).Delete(&task)

	return c.Status(200).JSON("deleted")
}
