import express from "express";

import postsController from "../controllers/posts.controller";

const router = express.Router();

router.post("/", postsController.create.bind(postsController));

export default router;
