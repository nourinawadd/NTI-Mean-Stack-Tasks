const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  comments: [{ id: String, text: String }]
});

module.exports = mongoose.model('Post', postSchema);
