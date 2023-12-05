//ResourceLibraryPage.jsx
//For The Users to Explore Our Resource Library

import React from 'react';
import { Link } from 'react-router-dom';
import './ResourceLibraryPage.css';
import Main from "../Main";


const ResourceLibraryPage = () => {
  return ( 
    <Main>
    <div className="resource-library-page">
     
      <h1>Resource Library</h1>
      <img src="/ResourceLibraryImages/ResourceLibrary.jpg" className="top-image"
    />
      <div className="description">
        <p>
          Welcome to our Resource Library! Here, you can find a variety of
          mental health resources, including articles, videos, and other
          valuable materials to support your well-being.
        </p>
      </div>
      <div className="buttons">
        <Link to="/articles">
          <button className="category-button">Articles</button>
        </Link>
        <Link to="/videos">
          <button className="category-button">Videos</button>
        </Link>
        <Link to="/other-resources">
          <button className="category-button">Other Resources</button>
        </Link>
      </div>
    </div>
    </Main>
  );
};

export default ResourceLibraryPage;