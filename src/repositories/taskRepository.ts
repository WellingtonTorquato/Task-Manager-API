import { sqliteConnection } from "../databases/sqlite3";
import { CreatedTaskDataType } from "../services/taskServices";

type CreateTaskTypes = CreatedTaskDataType & { id: string };

export const taskRepository = {
  async createTask(data: CreateTaskTypes) {
    try {
      const { id, title, description, date, status, idUser } = data;

      const db = await sqliteConnection();

      const querySQL =
        "INSERT INTO tasks (id, title, description, date, status, idUser) VALUES (?, ?, ?, ?, ?, ?);";

      await db.run(querySQL, [id, title, description, date, status, idUser]);

      return { id };
    } catch (error) {
      throw error;
    }
  },

  async getTask(id: string) {
    try {
      const db = await sqliteConnection();

      const querySQL = "SELECT * FROM tasks WHERE id = ?;";

      const task = await db.get(querySQL, [id]);

      return task;
    } catch (error) {
      throw error;
    }
  },
};
