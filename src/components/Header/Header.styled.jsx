import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  height: 128px;
  background-color: '#FFFFFF';
  box-shadow: 0 4px 8px -4px rgba(58, 53, 65, 0.42);
`;

export const StyledDiv = styled.div`
  display: flex;
  height: 64px;
  width: 1440px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.11px solid rgba(58, 53, 65, 0.12);
`;

export const StyledLogo = styled.a`
  display: flex;
  gap: 12px;
  align-items: center;
  text-decoration: none;
`;

export const StyledP = styled.p`
  margin: 0;
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
