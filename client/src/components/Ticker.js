import React from 'react';
import { DateTime } from 'luxon';

const Ticker = (props) => {
  return (
 <ul>
  <li>  <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}Last Updated: {DateTime.fromISO(props.publishedAt).toFormat('LLLL dd yyyy')}</a> </li>
 </ul>
    

  );
};

export default Ticker;
