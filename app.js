const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/profile', (req, res) => {
  res.send('profile created!');
});

app.post('/profile', (req, res) => {
    res.send('post profile created!');
});

app.put('/profile', (req, res) => {
    res.send('profile updated!');
});

app.delete('/profile', (req, res) => {
    res.send('profile deleted!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
