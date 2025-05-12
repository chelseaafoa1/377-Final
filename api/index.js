const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Favicon fix
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About route');
});

app.get('/quote', (req, res) => {
  res.json({ quote: "Testing", author: "chelseaafoa1" });
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = serverless(app);
