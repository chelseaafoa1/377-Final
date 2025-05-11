const express = require('express');
const serverless = require('serverless-http');
const fetch = require('node-fetch');

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About route');
});

app.get('/quote', async(req, res) => {
    try{
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
       
        if (!data || !data[0] || !data[0].q){
            console.error("Invalid response from ZenQuotes:", data);
            return res.status(500).json({error: 'Unexpected API response'});
        }
        return res.json({quote: data[0].q, author: data[0].a});
    } catch (error) {
        res.status(500).json({error: 'failed to fetch quote'});
    }
  
    });
app.use ((req, res) => {
    res.status(404).send('404 Not Found');
});

module.exports=serverless(app);