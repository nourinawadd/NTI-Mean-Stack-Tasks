const Post = require('../models/post.model');

// Get all posts
exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ _id: -1 });
  res.json(posts);
};

// Add post
exports.addPost = async (req, res) => {
  const newPost = new Post({
    content: req.body.content,
    likes: 0,
    comments: []
  });
  await newPost.save();
  res.json(newPost);
};

// Like post
exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json(post);
};

// Delete post
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};

// Add comment
exports.addComment = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push({ id: Date.now().toString(), text: req.body.text });
  await post.save();
  res.json(post);
};
