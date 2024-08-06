
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from '../Content'
import Ticker from '../Ticker';


const TopHeadlines = () => {

  const [topHeadlinesData, setTopHeadlinesData] = useState({ articles: [] });
  const [topHeadlinesURL, setTopHeadlinesURL] = useState(`http://localhost:5000/topheadlines`);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const results = await axios.get(topHeadlinesURL, {
        params: {
          page: currentPage,
          pageSize: 10 // Adjust this as needed
        }
      });
      setTopHeadlinesData(prevData => ({
        articles: [...prevData.articles, ...results.data.articles]
      }));
      setHasMore(results.data.articles.length > 0);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
}, [topHeadlinesURL, currentPage]);

  
  return (
    <>
      <div className="container pt-5">
        <form onSubmit={event => {
          event.preventDefault();
          setTopHeadlinesURL(`http://localhost:5000/search/${query}`);
          setCurrentPage(1); // Reset page number on new search
          setTopHeadlinesData({ articles: [] }); // Clear previous results
        }}>
          <div className="container">
            <div className="columns is-justify-content-center">
              <div className="column px-5 is-6">
                <input
                  type="text"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  className="input is-info mb-2 is-rounded"
                  placeholder="enter a keyword"
                />
                <button className="button is-small is-info is-inverted is-rounded" type="submit">Search</button>
              </div>
            </div>
          </div>
        </form>
        <p className="title is-1-desktop is-3-mobile p-3 has-text-white has-text-centered">Top Headlines</p>
  
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (<div className='has-text-white'>Loading...</div>) : (
          <div className="columns is-flex is-flex-direction-column is-align-items-center">
            <div className="ticker-wrapper is-align-items-center">
              <div className="ticker">
                {topHeadlinesData.articles.slice(0, 6).map((article, index) => (
                  <div className="ticker-item" key={index}>
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
            {topHeadlinesData.articles.slice(6).map((article, index) => (
              <div className="column rcorners1 is-full is-info has-background-white m-4" 
                style={{ color: 'blue', height: 'auto', width: '90%' }} 
                key={index}
              >
                <Content
                  url={article.url}
                  name={article.source.name}
                  urlToImage={article.urlToImage ? article.urlToImage : undefined}
                  publishedAt={article.publishedAt}
                  title={article.title}
                  content={article.content}
                  description={article.description}
                />
              </div>
            ))}
            {hasMore && (
              <button 
                className="button is-small is-info is-inverted is-rounded mt-4" 
                onClick={() => setCurrentPage(prevPage => prevPage + 1)}
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
  
};
export default TopHeadlines;