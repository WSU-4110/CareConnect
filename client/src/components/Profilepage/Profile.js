import React, { useEffect, useState } from 'react';
import './Profile.css';
import Navbar from '../Navbar/Navbar';
import ProfileLeftbar from './ProfileLeftbar';
import ProfileRightbar from './ProfileRightbar';
import ProfileMainpost from './ProfileMainpost';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5001/api/users/getProfile`,
          {
            _id: id,
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
  return (
    <div className="ProfileContainer">
      <Navbar axios={axios} profile={profile} />
      <div className="subProfileContainer">
        <ProfileLeftbar profile={profile} />
        <ProfileMainpost axios={axios} profile={profile} />
        <ProfileRightbar />
      </div>
    </div>
  );
}
