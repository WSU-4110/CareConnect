import React from "react";
import "./Rightbar.css"
import ads from "../Images/talkspace.png"
import ads1 from "../Images/BetterHelp.jpeg"
import addfriends from "../Images/add-user.png"
import profilepic1 from "../Images/profilepic1.jpeg"
import profilepic2 from "../Images/Profilepic2.jpeg"
import profilepic3 from "../Images/Profilepic3.jpeg"
import profilepic4 from "../Images/profilepic4.jpeg"
import profilepic5 from "../Images/image4.jpg"

export default function Rightbar() {
    return (
        <div className="Rightbar">
            <div className="rightcontainer">
                <div className='adsContainer'>
                    <img src={`${ads}`} className="adsimg" alt="" />
                    <div>
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: 20 }}>Talkspace</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "10px" }}>Feel happier with the help of a licensed counselor</p>
                    </div>
                </div>

                <div className='adsContainer'>
                    <img src={`${ads1}`} className="adsimg2" alt="" />
                    <div>
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: 20 }}>BetterHelp</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "10px" }}>Convenient and affordable therapy with BetterHelp</p>
                    </div>
                </div>
            </div>

            <div className="rightcontainer2">
            <p style={{ textAlign: 'center' }}>Suggested for You</p>
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic3}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Spongebob</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                </div>



                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic4}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Ifthihar Miah</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                </div>



                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic2}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Chris Hanson</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                    

                    
                </div>

                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic1}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>John Doe</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%" }}>
                            <img src={`${addfriends}`} className="addfriend" alt="" />
                        </div>

                    </div>
                    

                    
                </div>

                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${profilepic5}`} className="profilepic" alt="" />
                            <div>
                            <p style={{ marginLeft: "10px" ,textAlign:"start"}}>Trump</p>
                            <p style={{ marginLeft: "10px" ,textAlign:"start", marginTop: "-5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
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