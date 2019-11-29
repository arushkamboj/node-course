const path = require('path');
const express = require('express');

const app = express();
const publicDir = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDir));

app.get('', (req, res) => {
  res.render('index');
});

app.get('/weather', (req, res) => {
  res.send('Weather');
});

app.listen(3000, () => {
  console.log('The server is running on PORT:', 3000);
});
