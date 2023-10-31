import React from "react";
import "./Leftbar.css"
export default function Leftbar() {
    return(
        <div className="Leftbar">
                <div className="Notifications">   
                    <div style={{ display: "flex", justifyContent: 'space-around'}}>
                            <p>Notifications</p>   
                            <p style={{ color: "#aaa"}}>See All</p>

                    </div>
                </div>
        

        </div>
    )
}