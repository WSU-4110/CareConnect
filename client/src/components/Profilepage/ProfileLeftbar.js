import React, { useEffect } from 'react';
import './ProfileLeftbar.css';
import image from '../Images/Profilepic.png';
import image2 from '../Images/image2.jpg';
import profilepic1 from '../Images/profilepic1.jpeg';
import profilepic2 from '../Images/Profilepic2.jpeg';
import profilepic3 from '../Images/Profilepic3.jpeg';
import profilepic4 from '../Images/profilepic4.jpeg';
import profilepic5 from '../Images/image4.jpg';
export default function ProfileLeftbar({ profile }) {
  return (
    <div className="ProfileLeftbar">
      <div className="NotificationsContainer">
        <img src={`${image2}`} className="ProfilepageCover" alt="" />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}>
          <img src={`${image}`} className="Profilepageimage" alt="" />
          <div>
            <p
              style={{
                marginLeft: 6,
                marginTop: 30,
                color: 'black',
                textAlign: 'start',
              }}
            >
              {profile?.firstName + ' ' + profile?.lastName}
            </p>
            <p
              style={{
                marginLeft: 6,
                marginTop: 20,
                color: 'black',
                textAlign: 'start',
                marginTop: 5,
                fontSize: 11,
              }}
            >
              Software Developer
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'black', marginLeft: 20, fontSize: '14px' }}>
            Followings
          </p>
          <p
            style={{
              color: 'black',
              marginRight: 20,
              fontSize: '12px',
              marginTop: 5,
            }}
          >
            100
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <p style={{ color: 'black', marginLeft: 20, fontSize: '14px' }}>
            Followers
          </p>
          <p
            style={{
              color: 'black',
              marginRight: 20,
              fontSize: '12px',
              marginTop: 5,
            }}
          >
            80
          </p>
        </div>
        <div style={{ marginTop: 20 }}>
          <h5
            style={{
              color: 'black',
              marginLeft: 10,
              fontSize: '14px',
              marginRight: 30,
              marginTop: 15,
              textAlign: 'start',
            }}
          >
            User bio
          </h5>
          <p
            style={{
              color: 'black',
              fontSize: '12px',
              marginTop: 10,
              textAlign: 'start',
              marginLeft: '10px',
            }}
          >
            I would rather be despised of who I am, rather than loved by who I
            am not.
          </p>
        </div>
        <button
          style={{
            width: '100%',
            paddingTop: 7,
            paddingBottom: 7,
            border: 'none',
            backgroundColor: 'green',
            color: 'white',
          }}
        >
          Edit Bio
        </button>
      </div>

      <div className="NotificationsContainer">
                               
        <h3>Followings </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ marginLeft: 10 }}>Friends</p>
          <p style={{ marginRight: 10, color: '#aaa' }}>See all</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ marginLeft: 4 }}>
            <img src={`${profilepic1}`} className="friendimage" alt="" />
            <p style={{ marginTop: -2 }}>John Doe</p>
          </div>
          <div style={{ marginLeft: 4 }}>
            <img src={`${profilepic2}`} className="friendimage" alt="" />
            <p style={{ marginTop: -2 }}>George Doe</p>
          </div>
          <div style={{ marginLeft: 4 }}>
            <img src={`${profilepic3}`} className="friendimage" alt="" />
            <p style={{ marginTop: -2 }}>Mary Doe</p>
          </div>
          <div style={{ marginLeft: 4 }}>
            <img src={`${profilepic4}`} className="friendimage" alt="" />
            <p style={{ marginTop: -2 }}>Henry Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
