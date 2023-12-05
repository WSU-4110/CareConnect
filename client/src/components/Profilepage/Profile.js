import React from 'react';
import "./Profile.css"
import Navbar from "../Navbar/Navbar"
import ProfileLeftbar from './ProfileLeftbar';
import ProfileRightbar from './ProfileRightbar';
import ProfileMainpost from './ProfileMainpost';

export default function Profile() {
  return (
    <div className='ProfileContainer'>
    <Navbar/>
    <div className='subProfileContainer'>
        <ProfileLeftbar/>
        <ProfileMainpost/>
        <ProfileRightbar/>
        
        
            
    </div>
</div>
  );
}

