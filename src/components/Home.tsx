import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e74c3c',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box flex={1} overflow="auto">
        <img src='muto-electric.png'></img>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Your trusted partner for all electrical services. Reliable, professional, and always on time!
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/services">
          Explore Our Services
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
