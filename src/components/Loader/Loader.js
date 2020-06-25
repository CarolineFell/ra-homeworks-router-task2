import React from 'react';
import loader from '../../img/loader.gif';
import './Loader.css';

const Loader = () => (
  <div className="loader-bar">
    <img src={loader} className="loader" alt="loading..." />
  </div>
);

export default Loader;