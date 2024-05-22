import { randomUUID } from "node:crypto";
import { TaskDataType } from "../validations/taskSchema";

export type CreatedTaskDataType = TaskDataType & { idUser: string };

export type TaskRepositoryTypes = {
  createTask(data: CreatedTaskDataType): Promise<{} | undefined>;
  getTask(id: string): Promise<CreatedTaskDataType | undefined>;
};

export const taskServices = {
  async create(data: CreatedTaskDataType, repository: TaskRepositoryTypes) {
    try {
      const { title, description, date, status, idUser } = data;

      const task = {
        id: randomUUID(),
        title,
        description,
        date,
        status,
        idUser,
      };

      const taskCreated = await repository.createTask(task);

      return taskCreated;
    } catch (error) {
      throw error;
    }
  },
};
