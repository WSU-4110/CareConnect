import React from "react";
import "./ProfileMainpost.css"
import Contentpost from "../Mainpage/Contentpost"
import Post from "../Mainpage/Post"
import profilecover from "../Images/image2.jpg"
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ProfileMainpost() {
 
    return(
        <div className="Maincontainer">
            <div>
                <img src={`${profilecover}`} className="profilecoverimg" alt="" />
                <h2 style={{marginTop:-40, color:"white", textAlign:"start", marginLeft:"35px"}}>Your Profile</h2>
            </div>
            <Contentpost/>
            <Post/>
                
        

        </div>
    )
}