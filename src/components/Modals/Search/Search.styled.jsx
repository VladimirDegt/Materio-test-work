import styled from '@emotion/styled';
import { Button, List, Typography } from '@mui/material';
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

export const StyledTitle = styled(Typography)`
  font-family: Inter;
  font-weight: 500;
  font-size: 12px;
  color: rgba(58, 53, 65, 0.38);
  text-transform: uppercase;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin-top: 18px;

  li {
    padding: 0;
  }
`;

export const StyledContainerListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: rgba(58, 53, 65, 0.87);
  }

  :hover,
  focus {
    p {
      color: #804bdf;
    }
    svg {
      color: #804bdf;
    }
  }
`;

export const StyledTextListItem = styled.p`
  margin: 0;
  text-align: center;
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  color: rgba(58, 53, 65, 0.87);
`;
