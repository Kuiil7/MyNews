
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
    <div className="columns">
  <div className="column is-full p-4">
<div className="columns
p-4
is-mobile
is-flex-wrap-nowrap
scrolling-wrapper
scrollbar-hidden"   >

{articleData.articles && articleData.articles.map((article, articleIndex) => (

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
export default Health;