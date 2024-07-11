// src/components/Navbar/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="bg-gray-900">
      <Toolbar>
        <Typography variant="h6" className="flex-grow text-yellow-500 font-retro">
          Build Together, Play Together: Impact Games
        </Typography>
       
        <IconButton color="inherit">
          <NotificationsIcon className="text-yellow-500" />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon className="text-yellow-500" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
