const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('user', 'username imgurl')
      .populate({
        path: 'comments',
        populate: { path: 'user', select: 'username imgurl' }
      });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a post
router.post('/', async (req, res) => {
  try {
    const { userId, content } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const post = new Post({ user: userId, content });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Like or unlike a post
router.post('/:id/like', async (req, res) => {
  try {
    const { userId } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const alreadyLiked = post.likes.includes(userId);
    if (alreadyLiked) {
      post.likes.pull(userId);
    } else {
      post.likes.push(userId);
    }

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a comment
router.post('/:id/comment', async (req, res) => {
  try {
    const { userId, text } = req.body;
    const post = await Post.findById(req.params.id);
    const user = await User.findById(userId);
    if (!post || !user) return res.status(404).json({ error: 'Post or user not found' });

    const comment = new Comment({ user: userId, text });
    await comment.save();

    post.comments.push(comment._id);
    await post.save();

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
