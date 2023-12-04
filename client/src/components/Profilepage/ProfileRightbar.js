import React from "react";
import "./ProfileRightbar.css"
import ads from "../Images/talkspace.png"
import ads1 from "../Images/BetterHelp.jpeg"
import addfriends from "../Images/add-user.png"
import profilepic1 from "../Images/profilepic1.jpeg"
import profilepic2 from "../Images/Profilepic2.jpeg"
import profilepic3 from "../Images/Profilepic3.jpeg"
import profilepic4 from "../Images/profilepic4.jpeg"
import profilepic5 from "../Images/image4.jpg"

export default function ProfileRightbar() {
    return (
        <div className="profileRightbar">
            <div className="profilerightcontainer">
                <h3>Friend Requests</h3>
                <div>
                  <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }}>
                    <img src={`${profilepic3}`} className="friendimg" alt="" />
                    <p style={{ textAlign: "start", marginLeft: "10px" }}>Spongebob wants to connect</p>
                  </div>
                  <div style={{display: "flex" , justifyContent:"space-around"}}>
                    <button style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:5, paddingBottom: 5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:5, paddingBottom: 5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Deny</button>
                  </div>
                </div>



                <div>
                  <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }}>
                    <img src={`${profilepic4}`} className="friendimg" alt="" />
                    <p style={{ textAlign: "start", marginLeft: "10px" }}>tyler wants to connect</p>
                  </div>
                  <div style={{display: "flex" , justifyContent:"space-around"}}>
                    <button style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:5, paddingBottom: 5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:5, paddingBottom: 5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Deny</button>
                  </div>
                </div>
                 


                <div>
                  <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }}>
                    <img src={`${profilepic2}`} className="friendimg" alt="" />
                    <p style={{ textAlign: "start", marginLeft: "10px" }}>Chris Henson wants to connect</p>
                  </div>
                  <div style={{display: "flex" , justifyContent:"space-around"}}>
                    <button style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:5, paddingBottom: 5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:5, paddingBottom: 5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Deny</button>
                  </div>
                </div>
                 
                 
            </div>

            <div className="rightcontainer2">
                <p>Suggested for You</p>
                <div style={{marginTop: "-10"}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic3}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Spongebob</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-16px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                </div>



                <div style={{marginTop: "-10"}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic4}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Tyler</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-16px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                </div>



                <div style={{marginTop: "-10"}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic2}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Chris Hanson</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-16px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                    

                    
                </div>

                <div style={{marginTop: "-10"}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic1}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Teanna</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-16px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                    

                    
                </div>

                <div style={{marginTop: "-10"}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic5}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Trump</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-16px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                    

                    
                </div>


                
                








                

                
            </div>
        </div>
    )
}