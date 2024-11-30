import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#e74c3c', // Bright red
    },
    secondary: {
      main: '#111', // Dark black for accents and contrast
    },
    background: {
      default: '#fff', // White background for the whole app
      paper: '#f4f4f4', // Slightly off-white for cards or sections
    },
    text: {
      primary: '#333', // Dark text for readability
      secondary: '#555', // Lighter text for less emphasis
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif", // Clean, modern sans-serif font
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
