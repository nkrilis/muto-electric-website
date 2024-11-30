import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
        height: '75vh'
      }}
    >
<img src='muto-electric.png'></img>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Your trusted partner for all electrical services. Reliable, professional, and always on time!
      </Typography>
      <Button variant="contained" color="primary" href="/services">
        Explore Our Services
      </Button>
    </Box>
  );
}

export default Home;
