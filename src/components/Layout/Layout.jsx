import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { StyledContainerDiv } from './Layout.styled';

export const Layout = ({ toggleTheme }) => {
  return (
    <StyledContainerDiv>
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <Suspense
        fallback={
          <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </StyledContainerDiv>
  );
};
