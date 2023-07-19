import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const StyledSection = styled.section`
  position: relative;
  width: 1440px;
  margin: 0 auto;
  margin-top: 152px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0px rgba(58, 53, 65, 0.1);
`;

export const StyledContainerUserPhotoDiv = styled.div`
  position: absolute;
  top: 218px;
  left: 20px;
`;

export const StyledContainerInfoHeroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 20px 164px;
`;

export const StyledInfoHeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledNameUser = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 500;
  color: rgba(58, 53, 65, 0.87);
`;

export const StyledInfoUser = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledText = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  color: rgba(58, 53, 65, 0.87);
`;

export const StyledButton = styled(Button)`
  width: 160px;
  height: 40px;
  margin-top: auto;
  padding: 8px 22px 8px 18px;
  border-radius: 5px;
`;

export const StyledTextButton = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  color: #f4f5fa;
`;
