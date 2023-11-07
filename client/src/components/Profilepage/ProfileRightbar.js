import React, { useEffect } from 'react'
import image from "../Images/profilepic4.jpeg"

export default function ProfileRightbar() {
    return (
        <div className='Profilerightbar'>
          <div className='profilerightcontainer'>
            <h3>Followers</h3>
            <div>
                <div style={{marginTop:"10px"}}>
                 <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
                  <img src={`${image}`} className="Friendsimage" alt="" />
                  <p style={{textAlign:"start"  , marginLeft:"10px"}}>Teanna </p>
                </div>
              </div>
   
              
              
              
            </div>
    
          </div>
    
          <div className='rightcontainer2'>
            <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>
        
            
          </div>
    
    
        </div>
      )
    }
    