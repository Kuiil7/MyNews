import React from "react";
import { Link } from "react-router-dom";

const NewsHeader = () => {
  const mainContent = (
    <div className="container px-5">
      <div className="columns">
        <div className="column ">
          <div className="tabs is-centered">
            <ul>
              <li><Link className="navbar-item" to="/topheadlines">Search</Link></li>
              <li><Link className="navbar-item" to="/sports">Sport</Link></li>
              <li><Link className="navbar-item" to="/health">Health</Link></li>
              <li><Link className="navbar-item" to="/entertainment">Entertainment</Link></li>
              <li><Link className="navbar-item" to="/technology">Technology</Link></li>
              <li><Link className="navbar-item" to="/science">Science</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {mainContent}
    </>
  );
};

export default NewsHeader;
