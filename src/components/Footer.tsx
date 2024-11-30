import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#111', color: 'white', padding: '20px 0', textAlign: 'center', position: 'sticky',
        bottom: 0,
        width: '100%',}}>
      <Typography variant="body2">&copy; 2024 Electrician Co. | contact@electrician.com</Typography>
    </Box>
  );
}

export default Footer;
