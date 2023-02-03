import { UserInputDTO } from "../model/user";
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password,
      };
      
      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
