import { UserDatabase } from "../data/UserDatabase";
import { user } from "../model/user";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, InvalidPasswordLength } from "../error/customError";
import { UserInputDTO } from "../model/user";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password para criar uma conta na LaBook"'
        );
      }
      
      if (name.length < 4) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPasswordLength();
      }
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        name,
        email,
        password,
      };

      await userDatabase.insertUser(user);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
