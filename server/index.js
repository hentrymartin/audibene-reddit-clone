const express = require('express');
const cors = require('cors');
const app = express();
const postDetails = require('./data/post.json');

app.use(cors());

app.get('/post-details', (req, res) => {
  // Intentionally adding latency to show the spinner in the frontend
  setTimeout((function() {res.send(postDetails)}), 1000);
});

app.listen(3001, () => console.log('Reddit clone app listening on port 3001!'));

