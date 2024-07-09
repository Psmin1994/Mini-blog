import express from "express";
import ctrl from "../controllers/controller_post.js";

const router = express.Router();

router.get("/post", ctrl.getPost); // 전체 글 조회
router.get("/post/:id", ctrl.getPostById); // 특정 글 조회
router.get("/comment/:id", ctrl.getComment); // 댓글 조회

router.post("/post", ctrl.addPost); // 글 추가
router.post("/comment/:id", ctrl.addComment); // 댓글 추가

router.delete("/post/:id", ctrl.deletePostById); // 특정 글 삭제

export default router;
