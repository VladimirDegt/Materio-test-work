import { css } from '@emotion/css';
import { Global } from '@emotion/react';
import { StyledContainer } from './App.styled';
import { Header } from './Header/Header';

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
      </StyledContainer>
    </>
  );
};
