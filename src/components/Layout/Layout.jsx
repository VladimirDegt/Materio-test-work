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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </StyledContainerDiv>
  );
};
