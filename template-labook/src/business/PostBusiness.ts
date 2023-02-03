import {PostDatabase}  from "../data/PostDatabase";
import { post } from "../model/post";
import { CustomError, InvalidDescription, InvalidEmail, InvalidName, InvalidPassword, InvalidPasswordLength, InvalidPhoto } from "../error/customError";
import { PostInputDTO } from "../model/post";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const postDatabase = new PostDatabase();

export class PostBusiness {
  public createPost = async (input: PostInputDTO): Promise<void> => {
    try {
      const { photo, description, type, createdAt } = input;

      if (!photo || description || type || createdAt) {
        throw new CustomError(
          400,
          'Preencha os campos "photo","description" "type" e "createdAt" para criar um novo Post'
        );
      }

      if (!photo.includes(".jpeg") && !photo.includes(".png")) {
        throw new InvalidPhoto();
      }

      if (description.length < 6) {
        throw new InvalidDescription();
      }

      if (!Object.values(type).includes("Normal") && !Object.values(type).includes("Evento")) {
        throw new InvalidPhoto();
      }
  
      const id: string = idGenerator.generateId();

      const post: post = {
        id, photo, description, type, createdAt
      };

      await postDatabase.insertPost(post);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
