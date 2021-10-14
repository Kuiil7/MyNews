
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
import Content from './Content'

require('dotenv').config()

const AxiosDemo = (props) => {

  const [articleData, setArticleData] = useState({articles:[]});

  const [query, setQuery] = useState('');

  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true);
      setIsError(false)

      const result = await axios(url);
      setArticleData(result.data);
      setIsLoading(false);
      console.log(result.data)
    };
    fetchData();
  }, [url]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>



<Header />

      <form onSubmit={event => {
        setUrl(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`);
        event.preventDefault();
      }}>


<div class="columns is-justify-content-center ">
  <div className="column
is-5
mt-3
">
  <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="input is-primary mb-2  is-rounded"
          placeholder="enter a city name"
        />
<button className="button is-small is-primary  is-rounded" type="submit">Search</button>
  </div>
  </div>
 </form>



<div className="columns is-flex-wrap-wrap is-justify-content-center  "   >
      {articleData.articles && articleData.articles.map(article => (

<div className="column is-one-quarter box m-1  " key={article} >




<Content
url={article.url}
name={article.source.name}
urlToImage={article.urlToImage}
publishedAt={article.publishedAt}
title={article.title}content={article.content}
description={article.description}

/>

  </div>




))}
 </div>

      {isError && <div>Error fetching data.</div>}
    </div>
  );
};
export default AxiosDemo;