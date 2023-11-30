import React from "react";
import "./Mainpost.css"
import Contentpost from "./Contentpost"
import Post from "./Post"
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Mainpost() {
 
    return(
        <div className="Maincontainer">
            <Contentpost/>
            <Post/>
                
        

        </div>
    )
}