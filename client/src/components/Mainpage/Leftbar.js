import React from "react";
import "./Leftbar.css"
import image from "../Images/Profilepic.png"
import mentalhealth from "../Images/Mentalhealth.png"
import angerissues from "../Images/angerissues.jpeg"
import bipolar from "../Images/bipolar.webp"
import eating from "../Images/eatingdisorder.png"
import alchol from "../Images/AlcoholAddiction.webp"
import depression from "../Images/depression.jpeg"

import image1 from "../Images/image1.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import image4 from "../Images/image4.jpg"
export default function Leftbar() {
    return(
        <div className="Leftbar">
                    <div className="Notifications">   
                    <div style={{ display: "flex", justifyContent: 'space-around'}}>
                        <p style={{marginLeft: "-14px"}}>Notifications</p>   
                        <p style={{ color: "#aaa",marginLeft: "40px",cursor:"pointer" }}>See All</p>
                    
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: -5}}>
                        <img src={`${image1}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User1 likes your post</p>
                    </div>
                    
                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${image2}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User2 likes your post</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${image2}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User2 started following you</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${image3}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User3 likes your post</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`${image3}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User3 started following you</p>
                        <img src={`${image}`} className = "followimage" alt=""/>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${image1}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User1 left a comment on your post</p>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${image1}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User1 likes your post</p>

                    </div>

                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${image4}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User4 likes your post</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center",marginTop: -5}}>
                        <img src={`${image4}`} className = "notificationimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 13, textAlign:"start", width:"200px"}}>User4 left a comment on your post</p>
                    </div>
                </div>

                <div className="Notifications">   
                    <div style={{ display: "flex", justifyContent: 'space-around'}}>
                        <p style={{marginLeft: "-20px"}}>Communities</p>   
                        <p style={{ color: "#aaa", marginLeft: "40px",cursor:"pointer" }}>See All</p>
                    
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: -5}}>
                        <img src={`${mentalhealth}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Mental Health Awareness</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: -5}}>
                        <img src={`${angerissues}`} className = "communityimage" alt=""/>
                        <p style={{marginLeft: "5px", color:"#aaa", fontSize: 20, textAlign:"start", width:"200px"}}>Stuggles with Anger Issues</p>
                    </div>
                    <div style={{display:'flex', alignItems:"center", marginTop: -5}}>
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


