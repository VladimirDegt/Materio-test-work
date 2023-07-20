import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF',
    },
    background: '#FFFFFF',
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#020202',
    },
    background: '#020202',
  },
});
