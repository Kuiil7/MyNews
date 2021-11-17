import React from "react";
import { DateTime } from 'luxon';


const Content = (props) => {
  return (
    < >

<div > <a href={props.url}> {props.title}</a></div>
  <img src={props.urlToImage} alt="props urls"></img>
  <a href={props.url}> {props.description}</a>
  <p className="is-italic subtitle is-7">
{props.name}.
<br/>
     Last Updated: {DateTime.fromISO(props.publishedAt).toFormat('LLLL dd yyyy')}
      </p>


    </>
  );
};
export default Content;