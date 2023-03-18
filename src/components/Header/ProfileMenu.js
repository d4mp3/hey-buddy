import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        className='profile-menu-flex'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuSharpIcon sx={{ fontSize:"1.1rem" }}/>
        <AccountCircleIcon sx={{ fontSize:"1.1rem" }}/>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          ".MuiPaper-root": {
            minWidth: "150px",
            borderRadius: "1rem",
            marginTop: "0.5rem",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);" }}}
      >
        <MenuItem className="menu-items menu-items-signup" onClick={handleClose}>Signup</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Login</MenuItem>
        <div style={{ height: "0.5px", backgroundColor: "var(--grey)", width: "100%"}} />
        <MenuItem className="menu-items" onClick={handleClose}>Hey Buddy Home</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}