import React from 'react';
import { createTheme, ThemeProvider, Button, Typography } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', 
    },
    secondary: {
      main: '#009688', 
    },
    mode: 'dark', 
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    h4: {
      fontWeight: 'bold',
      color: '#ffccbc',
    },
  },
  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none', 
        },
      },
    },
  },
});

export default function CustomThemeExample() {
  return (
    <ThemeProvider theme={customTheme}>
      <Typography variant="h4" gutterBottom>
        Custom Theme Typography
      </Typography>
      <Button variant="contained" color="primary">
        Custom Theme Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>
    </ThemeProvider>
  );
}
