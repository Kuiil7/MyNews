const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

console.log('Loaded environment variables:', process.env); // Check if variables are loaded

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const API_KEY = process.env.REACT_APP_NEWS_API_KEY; 

if (!API_KEY) {
  console.error('API key is not set!');
  process.exit(1); // Exit if the API key is not found
}

const topHeadlinesAPI = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const sportsAPI = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`;
const healthAPI = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`;
const entertainmentAPI = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`;
const technologyAPI = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`;
const scienceAPI = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${API_KEY}`;

app.get('/topheadlines', (req, res) => {
  axios.get(topHeadlinesAPI)
    .then(response => res.json(response.data))
    .catch(error => console.error('Error fetching top headlines:', error));
});

app.get('/sports', (req, res) => {
  axios.get(sportsAPI)
    .then(response => res.json(response.data))
    .catch(error => console.error('Error fetching sports news:', error));
});

app.get('/health', (req, res) => {
  axios.get(healthAPI)
    .then(response => res.json(response.data))
    .catch(error => console.error('Error fetching health news:', error));
});

app.get('/entertainment', (req, res) => {
  axios.get(entertainmentAPI)
    .then(response => res.json(response.data))
    .catch(error => console.error('Error fetching entertainment news:', error));
});

app.get('/technology', (req, res) => {
  axios.get(technologyAPI)
    .then(response => res.json(response.data))
    .catch(error => console.error('Error fetching technology news:', error));
});

app.get('/science', (req, res) => {
  axios.get(scienceAPI)
    .then(response => res.json(response.data))
    .catch(error => console.error('Error fetching science news:', error));
});

app.get("/search/:query", (req, res) => {
  const { query } = req.params;
  axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
    .then(response => res.json(response.data))
    .catch(error => console.error('Error searching news:', error));
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
