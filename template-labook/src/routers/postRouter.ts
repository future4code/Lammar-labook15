import express from "express";

import { PostController } from "../controller/PostControler";

export const postRouter = express.Router()

const postController = new PostController()


postRouter.post('/post', postController.post)
// userRouter.post('/posts/:id', postController.login )


