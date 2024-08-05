import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from '../Content';

const Sports = () => {
  const [articleData, setArticleData] = useState({ articles: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10; // Adjust as needed
  const technologyEndPoint = `http://localhost:5000/sports`;

  const fetchData = async (page) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios.get(technologyEndPoint, {
        params: {
          _page: page,
          _limit: itemsPerPage,
        },
      });
      console.log(result.data);

      setArticleData(prevData => ({
        articles: [...prevData.articles, ...result.data.articles],
      }));
      setHasMore(result.data.articles.length === itemsPerPage); // Check if there are more articles to load
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container pt-5">
      <p className="title is-1-desktop is-3-mobile p-3 has-text-white">U.S. Sports</p>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div className='has-text-white'>Loading...</div>
      ) : (
        <>
          <div className="columns is-flex is-flex-direction-column is-wrap is-align-items-center">
            {articleData.articles && articleData.articles.map((article, articleIndex) => (
              <div
                className="column rcorners1 is-full is-info has-background-white m-4"
                style={{ color: 'blue', height: 'auto', width: '90%' }}
                key={articleIndex}
              >
                <Content
                  url={article.url}
                  name={article.source.name}
                  urlToImage={article.urlToImage}
                  publishedAt={article.publishedAt}
                  title={article.title}
                  content={article.content}
                  description={article.description}
                />
              </div>
            ))}
          </div>
          {hasMore && !isLoading && (
            <button onClick={handleLoadMore} className="button is-primary mt-4">
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Sports;
