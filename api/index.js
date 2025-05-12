const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/quote', (req, res) => {
  res.json({ quote: "Testing", author: "chelseaafoa1" });
});

module.exports = serverless(app);