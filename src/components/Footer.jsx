import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          className='flex md:hidden fixed bottom-0 left-0 w-full border-t border-solid border-gray-400 shadow	 z-10'
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
      <footer className='border-t-[2px] border-solid fixed bottom-0 bg-white z-50 w-screen'>
        <div className='flex justify-between shadow-md text-sm text-gray-800 p-3 mx-16'>
          <ul className='flex w-auto flex-wrap gap-x-8 list-disc'>
            © 2023 Hey-Buddy
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Privacy</li>
            <li>Your Privacy Choices</li>
            <li>Destinations</li>
          </ul>

          <div className='flex justify-between w-100	max-w-2/4'>2</div>
        </div>

      </footer>
    </div>

  );
}
