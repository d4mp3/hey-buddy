import React from 'react';
import "./header.css"
import logo from "../../assets/brand/png/logo-no-background.png";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function Header() {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className="navbar-logo"/>
        <div className="search-bar">
          <div className='search-bar-text'>Place</div>
          <div className='search-bar-text'>Date</div>
          <div className='search-bar-text2'>Add Buddies</div>
          <div className='search-icon-div'>
            <SearchTwoToneIcon sx={{ fontSize: 15 }}  className="search-icon"/>
          </div>
        </div>
        <div className="profile-container">
          <div className='hey-buddy-home'>Become Buddies friends!</div>
          <div className='globe-div'>
              <LanguageIcon sx={{fontSize:"1rem"}}/>
          </div>
          <div className='profile-div'>
            <BasicMenu />
          </div>
        </div>
    </div>
  )
}

export default Header;