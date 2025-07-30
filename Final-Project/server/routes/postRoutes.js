const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET all posts
router.get('/', postController.getAllPosts);

// CREATE a new post
router.post('/', postController.createPost);

// TOGGLE like
router.post('/:id/like', postController.toggleLike);

// ADD comment
router.post('/:id/comment', postController.addComment);

// DELETE post
router.delete('/:id', postController.deletePost);

module.exports = router;
