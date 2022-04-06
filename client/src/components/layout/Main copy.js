
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';



import Header from './Header'
import Content from '../Content'
import TopHeadlines from '../endpoints/TopHeadlines';
import NewsHeader from './NewsHeader'

require('dotenv').config()

const Main = () => {

  const [articleData, setArticleData] = useState({articles:[]});
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(``);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(true);

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


  return (
    <>



    <div className="container">

    <div className="columns">
  <div className="column is-full p-4">

  <form onSubmit={event => {
        setUrl(`http://localhost:5000/querySearch`);
        event.preventDefault();
      }}>

<div className="columns is-justify-content-center ">
  <div className="column
is-5
mt-3
mb-4
">
  <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="input is-info mb-2 is-rounded"
          placeholder="enter a keyword"
          onClick={() => setShow(!show)}


        />
<button className="button is-small is-info  is-rounded is-inverted"  type="submit">Search</button>
  </div>
  </div>
 </form>
 <NewsHeader />
 {isError && <div>Error fetching data.</div>}
 {isLoading ? (
  <div><p className="has-text-white"> Loading...</p></div>
) : (
<div className="columns
is-mobile
is-flex-wrap-nowrap

"
>
{articleData.articles && articleData.articles.map((article, articleIndex) => (
<div className="column" key={articleIndex}>
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
)}
  </div>
</div>
</div>
{show && <TopHeadlines/>}

    </>
  );
};
export default Main;