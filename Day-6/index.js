const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// read data from file
function readData() {
  return JSON.parse(fs.readFileSync('data.json', 'utf8'));
}

// write data to file
function writeData(data) {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

// GET all posts
app.get('/posts', (req, res) => {
  const data = readData();
  res.json(data);
});

// GET single post by id
app.get('/posts/:id', (req, res) => {
  const data = readData();
  const post = data.find(p => p.id == req.params.id);
  if (post) res.json(post);
  else res.status(404).send('Post not found');
});

// POST new post
app.post('/posts', (req, res) => {
  const data = readData();
  const newPost = { id: Date.now(), ...req.body };
  data.push(newPost);
  writeData(data);
  res.status(201).json(newPost);
});

// PUT a post
app.put('/posts/:id', (req, res) => {
  let data = readData();
  const index = data.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).send('Post not found');
  data[index] = { id: Number(req.params.id), ...req.body };
  writeData(data);
  res.json(data[index]);
});

// PATCH
app.patch('/posts/:id', (req, res) => {
  let data = readData();
  const post = data.find(p => p.id == req.params.id);
  if (!post) return res.status(404).send('Post not found');
  Object.assign(post, req.body);
  writeData(data);
  res.json(post);
});

// DELETE a post
app.delete('/posts/:id', (req, res) => {
  let data = readData();
  const newData = data.filter(p => p.id != req.params.id);
  if (data.length === newData.length) return res.status(404).send('Post not found');
  writeData(newData);
  res.send('Post deleted');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running...`);
});
