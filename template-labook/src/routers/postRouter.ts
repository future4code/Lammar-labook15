import express from "express";

import { PostController } from "../controller/PostControler";

export const postRouter = express.Router()

const postController = new PostController()


postRouter.post('/post', postController.post)
postRouter.get('/:id', postController.getPostById )


