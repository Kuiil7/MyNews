import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import styles from './App.css'; // Import css modules stylesheet as styles


require('dotenv').config()

function App2() {

  const [data, setData] = useState({ articles: [] });

  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');

  const [url, setUrl] = useState(
   `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=acb6921b9e154a198dff2d4b65846e31`
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(url);

      setData(result.data);
      setIsLoading(false);
      console.log(result.data)

    };

    fetchData();
  }, [url]);






const REACT_APP_API_KEY = 'acb6921b9e154a198dff2d4b65846e31'




  return (

        <div>
<section className="hero is-success">
  <div className="hero-body">
    <p className="title">
    Welcome to MyNews!
    </p>
    <p className="subtitle">
     Your #1 world news site powered by newsapi.org
    </p>
  </div>
</section>


<div className="columns is-mobile is-multiline is-centered">
  <div className="column is-narrow">
    <p className="bd-notification is-primary">
      <code className="html">is-narrow</code><br/>
      First Column
    </p>
  </div>

</div>
      <form onSubmit={event => {
        setUrl(`https://newsapi.org/v2/everything?q=${query}&apiKey=${REACT_APP_API_KEY}`);

        event.preventDefault();
      }}>

<div className="columns  mt-2">
  <div className="column is-half is-offset-one-quarter">
  <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="input is-primary"
          laceholder="enter a keyword"

        />
          <button className="button is-small is-primary" type="submit">Search</button>
  </div>
</div>


      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>

          {data.articles && data.articles.map(article => (


<div id="card-row" className="columns">
<div className="column is-3">


<div class="card has-text-gray" >
  <div class="card-content" >
    <div class="content" >
    <a href={article.url}>
            {article.title}
            </a>
            <p>
            {article.description}
            </p>

    </div>
    <div class="card-image">

  </div>
  </div>
</div>

</div>

</div>






          ))}

        </div>
      )}



    </div>


  );
}

export default App2;