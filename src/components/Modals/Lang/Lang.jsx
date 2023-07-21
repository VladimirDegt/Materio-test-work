import { Box, List, Popover } from '@mui/material';
import { useState } from 'react';
import { StyledListItem, StyledButton } from './Lang.styled';
import { handleCloseModalMUI, handleListItemClick } from 'utils/handlers';

export const ModalLang = ({ isOpen, handleCloseModal, setState }) => {
  const [anchorEl, setAnchorEl] = useState(isOpen);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const id = Boolean(anchorEl) ? 'simple-popover' : undefined;

  return (
    <Popover
      id={id}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() =>
        handleCloseModalMUI(setAnchorEl, handleCloseModal, setState)
      }
      anchorOrigin={{
        vertical: 60,
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="main mailbox folders">
          <StyledButton
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0, setSelectedIndex)}
          >
            <StyledListItem primary="English" />
          </StyledButton>

          <StyledButton
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1, setSelectedIndex)}
          >
            <StyledListItem primary="French" />
          </StyledButton>

          <StyledButton
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2, setSelectedIndex)}
          >
            <StyledListItem primary="Arabic" />
          </StyledButton>
        </List>
      </Box>
    </Popover>
  );
};
