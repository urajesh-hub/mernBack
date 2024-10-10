import express from "express";
import { getPosts,createPost,getsinglePost,updatePost,deletePost } from "../controller/postController.js";
const router =express.Router();


router.get('/posts',getPosts)
router.post('/createpost',createPost)
router.get('/post/:id',getsinglePost)
router.put('/updatepost/:id',updatePost)
router.delete('/deletepost/:id',deletePost)

export default router