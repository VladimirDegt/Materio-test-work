import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  height: 128px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px -4px rgba(58, 53, 65, 0.42);
`;

export const StyledTopHeaderDiv = styled.div`
  display: flex;
  height: 64px;
  border-bottom: 1.11px solid rgba(58, 53, 65, 0.12);
`;

export const StyledContentTopHeaderDiv = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.a`
  display: flex;
  gap: 12px;
  align-items: center;
  text-align: center;
  text-decoration: none;
`;

export const StyledP = styled.p`
  margin: 0;
  padding-top: 4px;
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 600;
  color: rgba(58, 53, 65, 0.87);
`;

export const StyledBoxIconsDiv = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledContainerIconButton = styled.button`
  height: 40px;
  width: 40px;
  padding: 0px;
  border: none;
  background-color: inherit;
  cursor: pointer;

  :hover,
  :focus {
    border-radius: 50px;
    background-color: #f4f5fa;
  }
`;

export const StyledUserMiniButton = styled.button`
  padding: 0px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
