const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.addPost);
router.post('/posts/:id/like', postController.likePost);
router.delete('/posts/:id', postController.deletePost);
router.post('/posts/:id/comments', postController.addComment);

module.exports = router;
