import React from 'react';
import "./header.css"
import logo from "../../assets/brand/png/logo-no-background.png";

function Header() {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className="navbar-logo"/>
        <div className="search-bar">
          <div className='search-bar-text'>Place</div>
          <div className='search-bar-text'>Date</div>
          <div className='search-bar-text2'>Add Buddies</div>
        </div>
        <div className="profile-container"></div>
    </div>
  )
}

export default Header;