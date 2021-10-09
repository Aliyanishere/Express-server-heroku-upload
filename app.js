const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello Aliyan!');
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

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
