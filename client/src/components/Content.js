import React from 'react';
import { DateTime } from 'luxon'; 

const Content = (props) => {
  return (
    <>
     <p className="title is-4 " > <a href={props.url} >{props.title}</a></p>
     <p className="is-italic subtitle is-7 ">{props.name}. Last Updated: {DateTime.fromISO(props.publishedAt).toFormat('LLLL dd yyyy')}</p>
     <p className="has-text-centered">{props.urlToImage && <img src={props.urlToImage} alt="Image" />}</p>
     <p ><a href={props.url} >{props.description}</a></p>
    </>
  );
};

export default Content;
