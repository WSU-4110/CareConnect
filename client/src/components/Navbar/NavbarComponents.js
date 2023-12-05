import React from 'react';
import NavbarComponent from './NavbarComponent';
import searchIcon from '../Images/search.png';
import Notifications from '../Images/bell.png';
import Message from '../Images/message.png';
import Profileimage from '../Images/Profilepic.png';
import logo from '../Images/careconnectlogo.png';
import { Link } from 'react-router-dom';

const Logo = () => (
  <NavbarComponent>
    {
      <Link to="/Home">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={`${logo}`} alt="Logo" className="logoImage" />
          <p>CareConnect</p>
        </div>
      </Link>
    }
  </NavbarComponent>
);

const SearchInput = ({ searchText, handleSearch }) => (
  <NavbarComponent>
    {
      <div data-testid="searchInput" className="searchInputContainer">
        <img src={`${searchIcon}`} className="searchIcon" alt="" />
        <input
          type="text"
          className="searchInput"
          value={searchText}
          onChange={handleSearch}
          placeholder="search for others"
          name=""
          id=""
        />
      </div>
    }
  </NavbarComponent>
);

const IconsContainer = ({ profile }) => (
  <NavbarComponent>
    {
      <div className="IconsContainer">
        <img src={`${Notifications}`} className="Icons" alt="" />
        <img src={`${Message}`} className="Icons" alt="" />
        <Link to={`/Profile/${profile?._id}`}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`${Profileimage}`} className="ProfileImage" alt="" />
            <p>{profile?.firstName + ' ' + profile?.lastName}</p>
          </div>
        </Link>
      </div>
    }
  </NavbarComponent>
);

export { Logo, SearchInput, IconsContainer };
