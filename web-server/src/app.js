const path = require('path');
const express = require('express');

const app = express();
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

app.get('', (req, res) => {
  res.send('I arrived');
});

app.get('/weather', (req, res) => {
  res.send('Weather');
});

app.listen(3000, () => {
  console.log('The server is running on PORT:', 3000);
});
