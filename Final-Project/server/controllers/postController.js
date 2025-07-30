const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('user', 'username imgurl')
      .populate({
        path: 'comments',
        populate: { path: 'user', select: 'username imgurl' }
      });
    res.json(posts);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { userId, content } = req.body;
    if (!content) return res.status(400).json({ error: 'Content required' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const post = await new Post({ user: userId, content }).save();
    res.status(201).json(await post.populate('user', 'username imgurl'));
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.toggleLike = async (req, res) => {
  try {
    const { userId } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    if (post.likes.includes(userId)) post.likes.pull(userId);
    else post.likes.push(userId);

    await post.save();
    res.json(post);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { userId, text } = req.body;
    const { id: postId } = req.params;

    if (!text) return res.status(400).json({ error: 'Comment text required' });

    const post = await Post.findById(postId);
    const user = await User.findById(userId);
    if (!post || !user) return res.status(404).json({ error: 'Post or user not found' });

    const comment = await new Comment({ user: userId, text }).save();
    post.comments.push(comment._id);
    await post.save();

    res.status(201).json({
      _id: comment._id,
      text: comment.text,
      createdAt: comment.createdAt,
      user: {
        _id: user._id,
        username: user.username,
        imgurl: user.imgurl || null
      }
    });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};
