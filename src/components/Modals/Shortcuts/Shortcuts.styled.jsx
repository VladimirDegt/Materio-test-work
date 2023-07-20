import styled from '@emotion/styled';
import { Box, Link, ListItemButton, ListItemText } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(58, 53, 65, 0.12);

  svg {
    fill: rgba(58, 53, 65, 0.6);
  }
`;

export const StyledText = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 600;
  color: rgba(58, 53, 65, 0.6);
`;

// export const StyledButton = styled(ListItemButton)`
//   width: 130px;
//   height: 40px;
//   background-color: ${props => (props.selected ? '#F7F2FF' : 'transparent')};
// `;

// export const StyledListItem = styled(ListItemText)`
//   margin: 0;
//   font-family: 'Inter';
//   font-size: 16px;
//   font-weight: 500;
//   color: rgba(58, 53, 65, 0.87);
// `;

export const StyledLink = styled(Link)`
  width: 174px;
  height: 151px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 24px;

  :hover,
  focus {
    background-color: #f4f5fa;
  }
`;

export const StyledContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: #f0f1f2;

  svg {
    fill: #8a8d93;
  }
`;

export const StyledTextTitle = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: rgba(58, 53, 65, 0.6);
`;

export const StyledTextCart = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: rgba(58, 53, 65, 0.38);
`;
