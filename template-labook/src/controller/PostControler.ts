import { PostInputDTO } from "../model/post";
import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
  public post = async (req: Request, res: Response) => {
    try {
      const { photo, description, type, createdAt, 
        authorId } = req.body;

      const input: PostInputDTO = {
        photo,
        description,
        type,  
        createdAt    
        
      };
      
      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message: "Post criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
