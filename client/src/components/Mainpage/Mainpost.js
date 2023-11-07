import React from "react";
import "./Mainpost.css"
import Contentpost from "./Contentpost"
import Post from "./Post"
export default function Mainpost() {
    return(
        <div className="Maincontainer">
            <Contentpost/>
                <Post/>
                <Post/>
                
        

        </div>
    )
}