import { css } from '@emotion/css';
import { Global } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledContainer } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';

export const App = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: 'Inter';
            background-color: '#F4F5FA';
          }
        `}
      />
      <StyledContainer>
        <Header />
        <Hero />
      </StyledContainer>
    </>
  );
};
