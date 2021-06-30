import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

function App() {

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




  return (

        <Fragment>
<section class="hero is-success">
  <div class="hero-body">
    <p class="title">
    Welcome to MyNews!
    </p>
    <p class="subtitle">
     Your #1 world news site powered by newsapi.org
    </p>
  </div>
</section>



      <form onSubmit={event => {
        setUrl(`https://newsapi.org/v2/everything?q=${query}&apiKey=acb6921b9e154a198dff2d4b65846e31`);

        event.preventDefault();
      }}>

<div class="columns  mt-2">
  <div class="column is-half is-offset-one-quarter">
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
        <ul>
          {data.articles && data.articles.map(article => (

<div class="columns is-mobile">
  <div className="column is-6 is-offset-one-fifth ">
  <li >
<div className="card p-2" key={article.id}>



          <a href={article.url}>
            {article.title}
            </a>
<img src={article.urlToImage} alt="article urls"></img>

<p className="has-text-right  is-italic is-size-7">
Last updated: {DateTime.fromISO(article.publishedAt).toFormat('LLLL dd yyyy')}
</p>

          </div>
            </li>

  </div>
</div>



          ))}

        </ul>
      )}




    </Fragment>


  );
}

export default App;