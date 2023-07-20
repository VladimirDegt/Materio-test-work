import { Box, List, Popover } from '@mui/material';
import { useState } from 'react';
import { StyledListItem, StyledButton } from './Lang.styled';

export const ModalLang = ({ isOpen, handleCloseModal }) => {
  const [anchorEl, setAnchorEl] = useState(isOpen);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCloseModalLang = () => {
    setAnchorEl(null);
    handleCloseModal();
  };

  const openModalLang = Boolean(anchorEl);
  const id = openModalLang ? 'simple-popover' : undefined;

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Popover
      id={id}
      open={openModalLang}
      anchorEl={anchorEl}
      onClose={handleCloseModalLang}
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
            onClick={event => handleListItemClick(event, 0)}
          >
            <StyledListItem primary="English" />
          </StyledButton>

          <StyledButton
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <StyledListItem primary="French" />
          </StyledButton>

          <StyledButton
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <StyledListItem primary="Arabic" />
          </StyledButton>
        </List>
      </Box>
    </Popover>
  );
};
