import React from 'react';
import './Mainpost.css';
import Feed from './Feed';

const Mainpost = ({ axios, profile }) => {
  return (
    <div data-testid="main-post" className="Maincontainer">
      <Feed axios={axios} profile={profile} />
    </div>
  );
};

export default Mainpost;
