import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from '@mui/material';
import { useState } from 'react';
import {
  StyledBoxHeader,
  StyledBoxNew,
  StyledButton,
  StyledButtonText,
  StyledTextHeader,
  StyledTextNew,
  StyledListItem,
} from './Notifications.styled';
import Avatar from '../../../images/avatar.png';

export const ModalNotifications = ({ isOpen, handleCloseModal }) => {
  const [anchorEl, setAnchorEl] = useState(isOpen);

  const handleCloseModalNotifications = () => {
    setAnchorEl(null);
    handleCloseModal();
  };

  const openModalNotifications = Boolean(anchorEl);
  const id = openModalNotifications ? 'simple-popover' : undefined;

  return (
    <Popover
      // sx={{ height: '466px' }}
      id={id}
      open={openModalNotifications}
      anchorEl={anchorEl}
      onClose={handleCloseModalNotifications}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <StyledBoxHeader>
        <StyledTextHeader>Notifications</StyledTextHeader>
        <StyledBoxNew>
          <StyledTextNew>6 New</StyledTextNew>
        </StyledBoxNew>
      </StyledBoxHeader>

      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '100%',
          height: '370px',
          overflowY: 'auto',
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
            >
              <StyledListItem>
                <ListItemIcon sx={{ minWidth: '38px' }}>
                  <img src={Avatar} alt="avatar" width="38" height="38" />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Congratulation Flora!" />
                  <ListItemText secondary="Won the monthly best seller badge" />
                </Box>
                <ListItemText secondary="today" />
              </StyledListItem>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
        <StyledButton>
          <StyledButtonText>Read All Notifications</StyledButtonText>
        </StyledButton>
      </Box>
    </Popover>
  );
};
