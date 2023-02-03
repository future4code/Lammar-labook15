import { post, PostInputDTO } from "../model/post";
import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
  public post = async (req: Request, res: Response) => {
    try {
      const { photo, description, type, createdAt, author_id
         } = req.body;

      const input: PostInputDTO = {
        photo,
        description,
        type,  
        author_id
      };
      
      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message: "Post criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getPostById = async (req:Request, res:Response): Promise<void> => {
    try {
        const id: string = req.params.id

        const postBusiness = new PostBusiness()
        const post = await postBusiness.getPostById(id)
        res.status(200).send(post)

    } catch (err: any) {
        res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
  
}
  }}

//   public getTasks= async (req: Request,res: Response) => {
//     try {

//         const taskBusiness = new TaskBusiness()

//         const allTasks= await taskBusiness.getTasks()
        
//         res.status(201).send(allTasks)
//     } catch (error: any) {
//         res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
//     }
// }