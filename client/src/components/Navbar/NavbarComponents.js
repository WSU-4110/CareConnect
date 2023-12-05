import React from 'react';
import NavbarComponent from './NavbarComponent';
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profilepic.png";
import logo from "../Images/careconnectlogo.png"

const Logo = () => (
  <NavbarComponent>
    {
        <div style={{display: "flex", alignItems: "center" }}>
            <img src={`${logo}`} alt="Logo" className="logoImage" />
                    <p>CareConnect</p>
        </div>
                    }
  </NavbarComponent>
);

const SearchInput = () => (
  <NavbarComponent>
    {<div className='searchInputContainer'>
                              <img src={`${searchIcon}`} className="searchIcon" alt="" />
                              <input type="text" className='searchInput' placeholder='search for others' name="" id="" />
                    </div>}
  </NavbarComponent>
);

const IconsContainer = () => (
  <NavbarComponent>
    {<div className='IconsContainer'>
                    <img src={`${Notifications}`} className="Icons" alt="" />
                    <img src={`${Message}`} className="Icons" alt="" />
                    <div style={{display:'flex' , alignItems:'center'}}>
                            <img src={`${Profileimage}`} className='ProfileImage' alt=''/>
                            <p>User</p>
                    </div>
          </div>}
  </NavbarComponent>
);

export { Logo, SearchInput, IconsContainer };
