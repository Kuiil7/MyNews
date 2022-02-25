const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
require('dotenv').config()

const topHeadlinesAPI = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
const sportsAPI = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
const healthAPI = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
const entertainmentAPI = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
const technologyAPI = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
const scienceAPI = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
//const querySearchAPI = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
app.use(cors());

app.get('/', (req, res) => {
  res.send('go to /topheadlines to see MyNews')
});

app.get('/topheadlines', (req, res) => {
  axios.get(topHeadlinesAPI)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/sports', (req, res) => {
    axios.get(sportsAPI)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get('/health', (req, res) => {
    axios.get(healthAPI)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });


  app.get('/entertainment', (req, res) => {
    axios.get(entertainmentAPI)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get('/technology', (req, res) => {
    axios.get(technologyAPI)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get('/science', (req, res) => {
    axios.get(scienceAPI)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get('/querySearch', (req, res) => {
    axios.get(querySearchAPI)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });





let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port} `);
});