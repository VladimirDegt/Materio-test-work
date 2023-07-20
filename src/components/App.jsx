import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledContainer } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { lightTheme, darkTheme } from '../utils/themes';

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Header toggleTheme={toggleTheme} />
        <Hero />
      </StyledContainer>
    </ThemeProvider>
  );
};
