const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { username, imgurl } = req.body;
    if (!username) return res.status(400).json({ error: 'Username is required' });
    if (await User.findOne({ username })) return res.status(400).json({ error: 'Username taken' });
    const user = await new User({ username, imgurl }).save();
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) return res.status(400).json({ error: 'Username is required' });
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
