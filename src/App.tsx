/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Articles } from './components/Articles/Articles';
import { ArticlePage } from './components/ArticlePage/ArticlePage';
import styles from './App.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:id" element={<ArticlePage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
