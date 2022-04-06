
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from '../Content'


const TopHeadlines = () => {

  const [topHeadlinesData, setTopHeadlinesData] = useState({ articles: [] });
  const [topHeadlinesURL, setTopHeadlinesURL] = useState(`http://localhost:5000/topheadlines`);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false)
      const results = await axios(topHeadlinesURL);
      setTopHeadlinesData(results.data);
      setIsLoading(false);
    };
    fetchData();
  }, [topHeadlinesURL]);


  return (
    <>
    <div className="container pt-5">
    <form onSubmit={event => {
    setTopHeadlinesURL(`http://localhost:5000/search/:${query}`);
    event.preventDefault();
    }}>
      <div className="container">
<div className="columns
      is-justify-content-center">
      <div className="column
      px-5
      is-6
      ">
        <input
      type="text"
      value={query}
      onChange={event =>
      setQuery(event.target.value)
      }
      className="input is-info mb-2  is-rounded"
      placeholder="enter a city name"
    />
    <button className="button is-small is-info is-inverted is-rounded" type="submit">Search</button>
    </div>
    </div>
    </div>
</form>
    <p className="title is-1-desktop is-3-mobile p-3 has-text-white">Top Headlines</p>

    {isError && <div>Something went wrong ...</div>}
    {isLoading ? (<div className='has-text-white'>Loading...</div>) : (

    <div className="columns">
  <div className="column is-full p-4">
<div className="columns
p-4
is-mobile
is-flex-wrap-nowrap
scrolling-wrapper
scrollbar-hidden"   >

{topHeadlinesData.articles && topHeadlinesData.articles.map((article, articleIndex) => (

<div className="column
is-three-quarters-mobile
is-two-thirds-tablet
is-half-desktop
is-one-third-widescreen
is-one-quarter-fullhd
 box m-1
 " key={articleIndex} >
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
  </div>
</div>
    )}
</div>

    </>
  );
};
export default TopHeadlines;