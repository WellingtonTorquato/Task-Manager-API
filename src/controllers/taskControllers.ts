import { NextFunction, Request, Response } from "express";
import { taskSchema } from "../validations/taskSchema";
import { taskServices } from "../services/taskServices";
import { taskRepository } from "../repositories/taskRepository";



export const taskControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, date, status } = taskSchema.parse(req.body);
      const UserID = req.userID;

      const task = {
        title,
        description,
        date,
        status,
        idUser: UserID,
      };

      const taskCreated = await taskServices.create(task, taskRepository);

      return res.status(201).json({ message: "tasks created!", taskCreated });
    } catch (error) {
      return next(error);
    }
  },
};
