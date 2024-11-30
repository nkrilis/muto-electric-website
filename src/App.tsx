import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
