import { Request, Response } from "express";

import postModel, { IPost } from "../models/posts.model";
import BaseController from "./base.controller"

class PostsController extends BaseController<IPost> {
    constructor() {
        super(postModel);
    }
}


export default new PostsController();