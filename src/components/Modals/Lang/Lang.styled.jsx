import styled from '@emotion/styled';
import { ListItemButton, ListItemText } from '@mui/material';

export const StyledButton = styled(ListItemButton)`
  width: 130px;
  height: 40px;
  background-color: ${props => (props.selected ? '#F7F2FF' : 'transparent')};
`;

export const StyledListItem = styled(ListItemText)`
  margin: 0;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  color: rgba(58, 53, 65, 0.87);
`;
