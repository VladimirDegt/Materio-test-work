import styled from '@emotion/styled';
import { Box, Button, ListItemButton, Typography } from '@mui/material';

export const StyledBoxHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(58, 53, 65, 0.12);
`;

export const StyledTextHeader = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: rgba(58, 53, 65, 0.87);
`;

export const StyledBoxNew = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 20px;
  border-radius: 10px;
  background-color: #f1eafe;
`;

export const StyledTextNew = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #9155fd;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 5px;
  background-color: #9155fd;
  margin: 16px auto;

  :hover,
  focus {
    background-color: #7c33ff;
  }
`;

export const StyledButtonText = styled(Typography)`
  margin: 0;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
`;

export const StyledListItem = styled(ListItemButton)`
  display: flex;
  gap: 16px;
`;
