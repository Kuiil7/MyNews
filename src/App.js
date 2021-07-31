import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

import './App.css'

require('dotenv').config()

function App() {

  const [data, setData] = useState({ articles: [] });

  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');

  const [isLoading, setIsLoading] = useState(false);



  const [url, setUrl] = useState(
    `  https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`

  );



  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);

      setIsError(false);

      const result = await axios(url);

      setData(result.data);
      setIsLoading(false);
      console.log(result.data)

    };

    fetchData();
  }, [url]);





  return (
    <Fragment>

<section className="hero is-success is-small">
  <div className="hero-body">
    <p className="title">
    Welcome to MyNews!
    </p>
    <p className="subtitle is-7 is-italic">
     Your #1 World News search site powered by Newsapi.org!
     <br/>
     Search every article published by over 80,000 different sources large and small in the last 3 years.

    </p>

    <p className="is-pulled-right">
    Today's date: {DateTime.now().toFormat('LLLL dd yyyy')}

    </p>

  </div>
</section>



<form onSubmit={event => {
        setUrl(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);

        event.preventDefault();
      }}>


  <div className="column is-6  is-half is-offset-one-quarter">

  <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="input is-primary mb-2"
          placeholder="enter a keyword"

        />
   <button className="button is-small is-primary" type="submit">Search</button>

  </div>




 </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading Latest Top Headlines...</div>
      ) : (
        <div className="container ">
<div className="columns is-flex-wrap-wrap is-centered">


{data.articles && data.articles.map((article,i) => (

  <div className="column is-one-quarter box m-1  " key={i} >


      <div className='reverse-columns is-link is-small'>

      <a href={article.url}>{article.title}</a>

      <img src={article.urlToImage} alt="article urls"></img>

      <p className="is-italic subtitle is-7">
 {article.source.name}.
 <br/>
         Last Updated: {DateTime.fromISO(article.publishedAt).toFormat('LLLL dd yyyy')}
        </p>

        </div>
    </div>




 ))}



</div>
        </div>
      )}


<div >

  <div className="content has-text-centered mt-6 has-background-primary" style={{height:"60px"}}>
    <p className="has-text-white m-7 is-justify-content-center">
      MyNews by <a className="has-text-white " href="https://jgamworks.com">jgamworks.com</a>.
    </p>
  </div>

</div>


    </Fragment>
  );
}

export default App;