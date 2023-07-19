import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Input from '@mui/material/Input';

export const StyledInput = styled(Input)`
  height: 68px;
  padding: 22px 24px;
`;

export const StyledBoxIconClose = styled.div`
  display: flex;
  gap: 10px;
  aligh-items: center;

  p {
    margin: 0;
  }
`;

export const SyledEscButton = styled(Button)`
  color: rgba(58, 53, 65, 0.87);
  min-width: 20px;

  :hover,
  focus {
    border-radius: 50px;
    background-color: #f4f5fa;
  }
`;
