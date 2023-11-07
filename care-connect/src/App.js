import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import ResourceLibraryPage from './components/ResourceLibraryPage';
import VideosPage from './components/VideosPage';
import ArticlesPage from './components/ArticlesPage';
import OtherResourcesPage from './components/OtherResourcesPage';
import AboutUs from './components/AboutUs';
import DiscussionThreads from './components/DiscussionThreads';
import DiscussionThread from './components/DiscussionThread';

import './App.css';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [discussionThreads, setDiscussionThreads] = useState([
    {
      id: 1,
      title: ' How can I avoid stressful situations in life? ',
      comments: [],
      likes: 0,
    },
    {
      id: 2,
      title: ' CareConnect Community ',
      comments: [],
      likes: 1,
    },
  ]);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              showSignup ? (
                <Signup />
              ) : (
                <LandingPage toggleSignup={toggleSignup} />
              )
            }
          />
          <Route path="/resource-library" element={<ResourceLibraryPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/other-resources" element={<OtherResourcesPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/discussion-threads" element={<DiscussionThreads discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/>
          <Route path="/discussion-threads/:threadId"element={<DiscussionThread discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

const LandingPage = ({ toggleSignup }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to Care Connect</h1>
      <h2>Care and Connect for a Healthier Tomorrow.</h2>
      <div className="buttons">
        <button className="login-button">Login</button>
        <button className="signup-button" onClick={toggleSignup}>
          Signup
        </button>
        <Link to="/resource-library">
          <button className="resource-library-button">Resource Library</button>
        </Link>
        <Link to="/about-us">
          <button className="/about-button">About Us</button>
        </Link>
        <Link to="/discussion-threads">
          <button className="discussion-threads-button">Discussion Threads</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
