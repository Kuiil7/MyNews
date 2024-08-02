
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from '../Content'


const Health = () => {

  const [articleData, setArticleData] = useState({articles:[]});
  const technologyEndPoint = `http://localhost:5000/health`
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false)
      const result = await axios(technologyEndPoint);
      console.log(result.data); 

      setArticleData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [technologyEndPoint]);


  return (
    <>
    <div className="container pt-5">
    <p className="title is-1-desktop is-3-mobile p-3 has-text-white">U.S. Health</p>
    {isError && <div>Something went wrong ...</div>}
    {isLoading ? (<div className='has-text-white'>Loading...</div>) : (
    <div className="columns is-flex is-flex-direction-column is-wrap is-align-items-center " >

{articleData.articles && articleData.articles.map((article, articleIndex) => (

<div className="column rcorners1  is-full is-info has-background-white m-4" 
style={{ color: 'blue', height: 'auto', width:'90%' }}   key={articleIndex} >


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

    </>
  );
};
export default Health;