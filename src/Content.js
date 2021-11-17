import React from "react";
import { DateTime } from 'luxon';


const Content = (props) => {
  return (
    < >
    
<article className="message is-info">
  <div className="message-header">
    <p>{props.title}</p>
  </div>
  <div className="message-body">
  <img src={props.urlToImage} alt="props urls"></img>
  <a href={props.url}> {props.description}</a>
  <p className="is-italic subtitle is-7">
{props.name}.
<br/>
     Last Updated: {DateTime.fromISO(props.publishedAt).toFormat('LLLL dd yyyy')}
      </p>
  </div>
</article>
    </>
  );
};
export default Content;