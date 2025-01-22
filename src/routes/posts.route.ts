import express from "express";

import postsController from "../controllers/posts.controller";

const router = express.Router();

router.get("/", postsController.getAll.bind(postsController));

router.post("/", postsController.create.bind(postsController));

router.get("/:id", postsController.getById.bind(postsController));

router.get("/post", postsController.getAllPostsBySender.bind(postsController));

export default router;
