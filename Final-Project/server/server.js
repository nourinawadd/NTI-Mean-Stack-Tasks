const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const postSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    comments: [{ id: String, text: String }]
});

const Post = mongoose.model('Post', postSchema);

app.use(cors());
app.use(express.json());

// Get all posts
app.get('/posts', async (req, res) => {
    const posts = await Post.find().sort({ _id: -1 });
    res.json(posts);
});

// Add post
app.post('/posts', async (req, res) => {
    const newPost = new Post({
        content: req.body.content,
        likes: 0,
        comments: []
    });
    await newPost.save();
    res.json(newPost);
});

// Like post
app.post('/posts/:id/like', async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();
    res.json(post);
});

// Delete post
app.delete('/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

// Add comment
app.post('/posts/:id/comments', async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.comments.push({ id: Date.now().toString(), text: req.body.text });
    await post.save();
    res.json(post);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
