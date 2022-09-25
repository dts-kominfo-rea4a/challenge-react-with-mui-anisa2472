// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import {
  Typography, Divider
} from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <header>
      <Typography variant="h3" sx={{ pt: 2, fontWeight: 500 }}> Call a Friend </Typography>
      <Divider sx={{ pt: 2 }}>Your friendly contact app</Divider>
    </header>
  );
};

export default Header;