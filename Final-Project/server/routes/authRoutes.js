const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, imgurl } = req.body;
    if (!username) return res.status(400).json({ error: 'Username is required' });

    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ error: 'Username already taken' });

    const user = new User({ username, imgurl });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) return res.status(400).json({ error: 'Username is required' });

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
