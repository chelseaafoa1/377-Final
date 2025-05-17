//For Index page
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/quote', (req, res) => {
  res.json({ quote: "testing", author: "chelsea" });
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use((req, res) => {
  res.status(404).send('404 Not Found'); //404
});

module.exports = serverless(app);