import styled from '@emotion/styled';
import { Box, ListItemButton, ListItemText } from '@mui/material';

export const StyledBoxHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid rgba(58, 53, 65, 0.12);
`;

export const StyledBoxNew = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const StyledTextHeader = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: rgba(58, 53, 65, 0.87);
`;

export const StyledTextNew = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(58, 53, 65, 0.38);
`;

export const StyledListItem = styled(ListItemButton)`
  display: flex;
  gap: 8px;
  padding: 9px 16px;

  svg {
    fill: rgba(58, 53, 65, 0.87);
  }
`;

export const StyledText = styled(ListItemText)`
  margin: 0;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(58, 53, 65, 0.87);
`;
