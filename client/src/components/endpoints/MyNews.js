
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from '../Content'
import Ticker from '../Ticker';


const MyNews = () => {

  const [topHeadlinesData, setTopHeadlinesData] = useState({ articles: [] });
  const [topHeadlinesURL, setTopHeadlinesURL] = useState(`http://localhost:5000/mynews`);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false)
      const results = await axios(topHeadlinesURL);
      console.log(results.data); 
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
    <p className="title is-1-desktop is-3-mobile p-3 has-text-white has-text-centered">Top Headlines</p>

    {isError && <div>Something went wrong ...</div>}
    {isLoading ? (<div className='has-text-white '>Loading...</div>) : (

    <div className="columns is-flex is-flex-direction-column is-wrap is-align-items-center " >


<div className="ticker-wrapper">
            <div className="ticker">
              {topHeadlinesData.articles && topHeadlinesData.articles.map((article, articleIndex) => (
                <div className="ticker-item" key={articleIndex}>
                  <Ticker
                    url={article.url}
                    name={article.source.name}
                    publishedAt={article.publishedAt}
                    title={article.title}
       
                  />
                </div>
              ))}
            </div>
          </div>
          {topHeadlinesData.articles && topHeadlinesData.articles.map((article, articleIndex) => (

<div className="column rcorners1  is-full is-info has-background-white m-4" 
style={{ color: 'blue', height: 'auto', width:'90%' }}   key={articleIndex} >


<Content
url={article.url}
name={article.source.name}
urlToImage={article.urlToImage ? article.urlToImage : undefined}
publishedAt={article.publishedAt}
title={article.title}content={article.content}
description={article.description}
/>

 

  </div>

))}
  </div>

    )}
</div>

    </>
  );
};
export default MyNews;