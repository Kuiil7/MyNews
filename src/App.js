import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';



require('dotenv').config()

function App() {

  const [data, setData] = useState({ articles: [] });

  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');

  const [isLoading, setIsLoading] = useState(false);


  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=acb6921b9e154a198dff2d4b65846e31`

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


const REACT_APP_API_KEY = 'acb6921b9e154a198dff2d4b65846e31'



  return (
    <Fragment>

<section className="hero is-success">
  <div className="hero-body">
    <p className="title">
    Welcome to MyNews!
    </p>
    <p className="subtitle">
     Your #1 world news site powered by newsapi.org!
    {DateTime.now().toFormat('LLLL dd yyyy')}
    </p>
    <p className="is-pulled-right">
    {DateTime.now().toFormat('LLLL dd yyyy')}

    </p>
  </div>
</section>



<form onSubmit={event => {
        setUrl(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${REACT_APP_API_KEY}`);

        event.preventDefault();
      }}>

<div >
  <div >

  <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="input is-primary"
          placeholder="enter a keyword"

        />
          <button className="button is-small is-primary" type="submit">Search</button>
  </div>
</div>
 </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading Top Headlines...</div>
      ) : (
        <div>
<div className="columns is-flex-wrap-wrap p-2 ">

{data.articles && data.articles.map(article => (

  <div className="column is-one-third mb-2">


<div key={article.id}>
      <div className='reverse-columns '>
      <a href={article.url}>{article.title}</a>

       </div>


      <img src={article.urlToImage} alt="article urls"></img>


      <div className='reverse-columns'>

      <p className="is-italic is-pulled-right is-size-7 ">
Source: {article.source.name}
        </p>

        <p className="is-size-7">
        Last updated: {DateTime.fromISO(article.publishedAt).toFormat('LLLL dd yyyy')}

        </p>

        </div>

    </div>



  </div>

 ))}
</div>
        </div>
      )}


    </Fragment>
  );
}

export default App;