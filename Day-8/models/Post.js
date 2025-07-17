const mongoose = require('mongoose');
const postschema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title:  { type: String, required: true },
  body:   { type: String, required: true }
});
module.exports = mongoose.model('Post', postschema);
