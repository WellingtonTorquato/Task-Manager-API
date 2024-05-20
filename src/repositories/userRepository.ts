import { sqliteConnection } from "../databases/sqlite3";
import { UserDataType } from "../validations/userSchema";


export type CreateUserDataType = UserDataType & {id: string};

export const userRepository = {
  async createUser(data: CreateUserDataType) {
    try {
      const { id, name, email, password } = data;

      const db = await sqliteConnection();

      const querySQL = "INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?);";

      await db.run(querySQL, [id, name, email, password]);

      return { id };
    } catch (error) {
        throw error;
    }
  },
};