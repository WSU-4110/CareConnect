import React from "react";
import "./Leftbar.css"
import image from "../Images/Profilepic.png"
import mentalhealth from "../Images/Mentalhealth.png"
import angerissues from "../Images/angerissues.jpeg"
import bipolar from "../Images/bipolar.webp"
import eating from "../Images/eatingdisorder.png"
import alchol from "../Images/AlcoholAddiction.webp"
import depression from "../Images/depression.jpeg"
import profilepic4 from "../Images/profilepic4.jpeg"
import profilepic3 from "../Images/Profilepic3.jpeg"
import profilepic1 from "../Images/profilepic1.jpeg"

import image1 from "../Images/image1.jpg"
import image4 from "../Images/image4.jpg"
export default function Leftbar() {
    return(
        <div className="Leftbar">
                    <div className="Notifications" style={{padding: "10px"}}>   
                    <div style={{ display: "flex", justifyContent: 'space-around'}}>
                        <p style={{marginLeft: "-14px"}}>Notifications</p>   
                        <p style={{ color: "#aaa",marginLeft: "40px",cursor:"pointer" }}>See All</p>
                    
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: "20px"}}>
                        <img src={`${profilepic3}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>Spongebob likes your post</p>
                    </div>
                    
                    <div style={{display:'flex', alignItems:"center",marginTop: "5px"}}>
                        <img src={`${profilepic4}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>Ifthihar Miah likes your post</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: "5px"}}>
                        <img src={`${profilepic4}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>Ifthihar Miah started following you</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: "5px"}}>
                        <img src={`${profilepic1}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>John Doe likes your post</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center", marginTop: "5px"}}>
                        <img src={`${profilepic1}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>John Doe started following you</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: "5px"}}>
                        <img src={`${image1}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>Kawsar Islam left a comment on your post</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: "5px"}}>
                        <img src={`${image1}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>Kawsar Islam likes your post</p>

                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: "5px"}}>
                        <img src={`${image4}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>Burahuan Uddin likes your post</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center",marginTop: "5px"}}>
                        <img src={`${image4}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "10px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>Burahuan Uddin left a comment on your post</p>
                    </div>
                </div>

                <div className="Notifications">   
                    <div style={{ display: "flex", justifyContent: 'space-around'}}>
                        <p style={{marginLeft: "-20px"}}>Communities</p>   
                        <p style={{ color: "#aaa", marginLeft: "40px",cursor:"pointer" }}>See All</p>
                    
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: "5px"}}>
                        <img src={`${mentalhealth}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Mental Health Awareness</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: "5px"}}>
                        <img src={`${angerissues}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Stuggles with Anger Issues</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: "5px"}}>
                        <img src={`${bipolar}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Bipolar Support</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${eating}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Eating Disorder</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${alchol}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Alcholic Annoymous</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${depression}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Depression Treatments</p>
                    </div>
                </div>

        </div>
    )
}