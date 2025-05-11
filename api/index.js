const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About route');
});

app.get('/quote', (req, res) => {
  res.json({ quote: "You got this, Chelsea!", author: "ChatGPT" });
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = serverless(app);
