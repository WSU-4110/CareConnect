import React from "react";
import "./Contentpost.css"
import profilepic from "../Images/Profilepic.png"
import imageicon from "../Images/gallery.png"
import emojiicon from "../Images/cat-face.png"
import videoicon from "../Images/video.png"
export default function Contentpost() {
    return(
        <div className='ContentUploadContainer'>
          <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
            <img src={`${profilepic}`} className="profileimage" alt="" />
            <input type="text" className='contentWritingpart' placeholder='Write your real thought.....'></input>
            </div>
            <div style={{ display: "flex", marginLeft: "10px" }}>
                <div>
                    <img src={`${imageicon}`} className="icons" alt="" />
                    <img src={`${emojiicon}`} className="icons" alt="" />
                    <img src={`${videoicon}`} className="icons" alt="" />
                    <button style={{marginLeft:"280px", paddingLeft:"20px" , paddingRight:"20px", marginBottom:"10px", border:"none"}}>Post</button>
                </div>
            </div>
          
    
  
        
        </div>
    )
}