import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => (
  <div className="ui icon message">
    <div className="content content-error">
      <div className="header header-error">Error 404</div>
      <p>This page does not exist</p>
      <Link to={`/`} className="back">
        <i className="arrow alternate circle left outline grey icon"></i> Go back to main page 
      </Link>
    </div>
  </div>
);

export default Error404;