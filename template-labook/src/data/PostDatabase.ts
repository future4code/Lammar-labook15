import { CustomError } from "../error/customError";
import { Request, Response } from "express";
import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public insertPost = async (post: post) => {
    try {
      await PostDatabase.connection
        .insert({
          id: post.id,
          photo: post.photo,
          description: post.description,
          type: post.type,
        })
        .into("labook_posts");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getPostById = async (req:Request) => {
    try {
      const id: string = req.params.id
      const result = await PostDatabase.connection
        .select('*')
        .from("labook_posts")        
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
