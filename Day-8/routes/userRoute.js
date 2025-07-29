const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = "mmmmmmmmmmmmmmmmm";

// Register
router.post('/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    const newuser = new User({ username, email, password: hashpassword });
    await newuser.save();

    const payload = {
      id: newuser._id,
      username: newuser.username,
      email: newuser.email
    };
    const token = jwt.sign(payload, JWT_SECRET);
    res.status(201).json({ message: "User created", token });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    };
    const token = jwt.sign(payload, JWT_SECRET);
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
