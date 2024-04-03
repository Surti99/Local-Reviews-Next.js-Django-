import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Nav from '../components/Nav'; // Adjust the import path as necessary

const theme = createTheme({
  // your theme configuration (if any)
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      {/* The rest of your components */}
    </ThemeProvider>
  );
}

export default App;