import React from 'react';
import "./Navbar.css";
import { Logo, SearchInput, IconsContainer } from './NavbarComponents'; 

export default function Navbar() {
  return (
    <div className='mainNavbar'>
      <Logo />
      <SearchInput />
      <IconsContainer />
    </div>
  );
}