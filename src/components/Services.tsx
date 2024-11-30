import React from 'react';
import { Grid2, Card, CardContent, Typography } from '@mui/material';

const services = [
  { title: 'Residential Wiring', description: 'Complete wiring for homes and apartments.' },
  { title: 'Commercial Electrical Solutions', description: 'Lighting, wiring, and electrical needs for businesses.' },
  { title: 'Lighting Installation', description: 'Interior and exterior lighting setup.' },
  { title: 'Electrical Panel Upgrades', description: 'Upgrade old panels for improved safety and efficiency.' },
  { title: 'Emergency Electrical Repairs', description: '24/7 emergency electrical services.' },
];

const Services: React.FC = () => {
  return (
    <Grid2 container spacing={3} sx={{ padding: '40px 20px',backgroundColor: '#e74c3c', }}>
      {services.map((service, index) => (
        <Grid2>
          <Card>
            <CardContent>
              <Typography variant="h3" sx={{ marginBottom: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body1">{service.description}</Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Services;
