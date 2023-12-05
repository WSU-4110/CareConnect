// App.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="flex justify-around items-center w-full h-screen">
        <div className="flex flex-col items-start bg-blue-500 p-8 text-white h-full w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-44 mt-2">CareConnect</h1>
          <div className="text-2xl mt-18 text-left items-center justify-center py-full">
            <p className="animate-fade-in">
              Our Mental Health Platform provides direct access to healthcare professionals, fostering a supportive community for individuals dealing with mental health challenges.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-8 w-full md:w-1/3">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">Get Started</h1>
            <div className="flex justify-center">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;