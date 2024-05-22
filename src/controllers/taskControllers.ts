import { NextFunction, Request, Response } from "express";
import { taskSchema } from "../validations/taskSchema";

export const taskControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, date, status } = taskSchema.parse(req.body);
      const UserID = req.userID;

      const taskCreated = {
        title,
        description,
        date,
        status,
        idUser: UserID,
      };

      return res.status(200).json({ message: "Tasks!", taskCreated });
    } catch (error) {
      return next(error);
    }
  },
};
