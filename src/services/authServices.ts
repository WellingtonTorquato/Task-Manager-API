import { LoginDataType } from "../validations/loginSchema";
import { UserRepositoryTypes } from "./userServices";

type Repository = {
  getUserByEmail(email: string): Promise<{} | undefined>;
};

export const authServices = {
  async login(data: LoginDataType, repository: UserRepositoryTypes) {
    try {
      const { email, password } = data;

      const user = await repository.getUserByEmail(email);
      if (!user) throw "email invalid!";

      return "token";
    } catch (error) {
      throw error;
    }
  },
};
