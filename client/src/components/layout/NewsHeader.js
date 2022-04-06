import React from "react";
import {Link } from "react-router-dom";


const NewsHeader = () => {

const mainContent = <div className="container px-5">
<div className="columns">
<div className="column ">
<div className="tabs is-centered">
<ul>
<li><Link className="navbar-item has-text-white" to="/topheadlines"> Top Headlines</Link></li>
<li><Link className="navbar-item has-text-white" to="/sports"> Sport</Link></li>
<li><Link className="navbar-item has-text-white" to="/health"> Health</Link></li>
<li><Link className="navbar-item has-text-white" to="/entertainment"> Entertainment</Link></li>
<li><Link className="navbar-item has-text-white" to="/technology"> Technology</Link></li>
<li><Link className="navbar-item has-text-white" to="/science"> Science</Link></li>
<li><Link className="navbar-item has-text-white" to="/testquery"> TestQuery</Link></li>

</ul>
</div>
</div>
</div>
</div>
return (
<>
{mainContent}
</>
  );
}
export default NewsHeader;