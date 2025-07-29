const express = require("express");
const jwt = require("jsonwebtoken");
const Post = require('../models/Post');
const router = express.Router();

const JWT_SECRET = "NfehOGnjsJ";

// Helper to extract user from token (no middleware)
function verifyToken(req) {
  const token = req.headers.authorization;
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// Create Post
router.post("/", async (req, res) => {
  const user = verifyToken(req);
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const { title, body } = req.body;
  const newpost = new Post({ userid: user.id, title, body });
  await newpost.save();
  res.status(201).json(newpost);
});

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Get Post by ID
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// Update Entire Post (PUT)
router.put("/:id", async (req, res) => {
  const user = verifyToken(req);
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Post not found" });
  res.json(updated);
});

// Partial Update (PATCH)
router.patch("/:id", async (req, res) => {
  const user = verifyToken(req);
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const updated = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  if (!updated) return res.status(404).json({ message: "Post not found" });
  res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  const user = verifyToken(req);
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const deleted = await Post.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Post not found" });
  res.json({ message: "Post deleted" });
});

module.exports = router;
