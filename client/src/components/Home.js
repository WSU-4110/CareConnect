import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Leftbar from './Mainpage/Leftbar';
import Mainpost from './Mainpage/Mainpost';
import Rightbar from './Mainpage/Rightbar';
import './Home.css';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [profile, setProfile] = useState(null);
  const user = localStorage.getItem('user');
  if (!user) {
    window.location = '/';
  }
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5001/api/users/getProfile`,
          {
            email: user,
          }
        );
        console.log('response', response);
        setProfile(response.data);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };
    getProfile();
  }, []);

  console.log('profile', profile);

  return (
    <div className="home">
      <Navbar axios={axios} profile={profile} />
      <div className="ComponentContainer">
        <Leftbar />
        <Mainpost axios={axios} profile={profile} />
        <Rightbar />
      </div>
    </div>
  );
}
