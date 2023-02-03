import { PostDatabase } from "../data/PostDatabase";
import { post } from "../model/post";
import {
  CustomError,
  InvalidDescription,
  InvalidPhoto,
  InvalidType,
  NotAuthor,
  NotId,
} from "../error/customError";
import { PostInputDTO } from "../model/post";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const postDatabase = new PostDatabase();

export class PostBusiness {
  public createPost = async (input: PostInputDTO): Promise<void> => {
    try {
      const { photo, description, type, author_id } = input;

      if (!photo && description && type) {
        throw new CustomError(
          400,
          'Preencha os campos "photo","description", "type" e "author_id" para criar um novo Post'
        );
      }

      if (!photo.includes(".jpg") && !photo.includes(".png")) {
        throw new InvalidPhoto();
      }

      if (description.length < 6) {
        throw new InvalidDescription();
      }

      if (type !== "Normal" && type !== "Evento") {
        throw new InvalidType();
      }

      if (!author_id) {
        throw new NotAuthor();
      }

      const id: string = idGenerator.generateId();

      const post: post = {
        id,
        photo,
        description,
        type,
        author_id,
      };

      await postDatabase.insertPost(post);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getPostById = async ( id: any ) => {
    try {
        // if (!id) {
        //     throw new NotId()
        // }

        const postDatabase = new PostDatabase()
        return await postDatabase.getPostById(id)

    } catch (err:any) {
        throw new Error(err.message)
    }
}
}
