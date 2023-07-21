import { useState } from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, List, ListItem, ListItemIcon, Popover } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '../../../images/user-mini.svg';
import {
  StyledBoxHeader,
  StyledTextHeader,
  StyledBoxNew,
  StyledTextNew,
  StyledListItem,
  StyledText,
} from './Profile.styled';
import { handleCloseModalMUI } from 'utils/handlers';

export const ModalProfile = ({ isOpen, handleCloseModal, setState }) => {
  const [anchorEl, setAnchorEl] = useState(isOpen);
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
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <StyledBoxHeader>
        <ListItemIcon sx={{ minWidth: '40px' }}>
          <img src={Avatar} alt="avatar" width="40" height="40" />
        </ListItemIcon>
        <StyledBoxNew>
          <StyledTextHeader>John Doe</StyledTextHeader>
          <StyledTextNew>Admin</StyledTextNew>
        </StyledBoxNew>
      </StyledBoxHeader>

      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '230px',
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <Box
              sx={{
                borderBottom: '1px solid rgba(58, 53, 65, 0.12)',
                paddingBottom: '4px',
              }}
            >
              <ListItem disablePadding>
                <StyledListItem>
                  <ListItemIcon sx={{ minWidth: '22px' }}>
                    <PermIdentityIcon sx={{ width: '22px', height: '22px' }} />
                  </ListItemIcon>
                  <StyledText>Profile</StyledText>
                </StyledListItem>
              </ListItem>
              <ListItem disablePadding>
                <StyledListItem>
                  <MailOutlineIcon sx={{ minWidth: '22px' }}>
                    <PermIdentityIcon sx={{ width: '22px', height: '22px' }} />
                  </MailOutlineIcon>
                  <StyledText>Inbox</StyledText>
                </StyledListItem>
              </ListItem>
              <ListItem disablePadding>
                <StyledListItem>
                  <ChatBubbleOutlineIcon sx={{ minWidth: '22px' }}>
                    <PermIdentityIcon sx={{ width: '22px', height: '22px' }} />
                  </ChatBubbleOutlineIcon>
                  <StyledText>Chat</StyledText>
                </StyledListItem>
              </ListItem>
            </Box>

            <Box
              sx={{
                borderBottom: '1px solid rgba(58, 53, 65, 0.12)',
                paddingBottom: '4px',
              }}
            >
              <ListItem disablePadding>
                <StyledListItem>
                  <ListItemIcon sx={{ minWidth: '22px' }}>
                    <SettingsIcon sx={{ width: '22px', height: '22px' }} />
                  </ListItemIcon>
                  <StyledText>Settings</StyledText>
                </StyledListItem>
              </ListItem>
              <ListItem disablePadding>
                <StyledListItem>
                  <MailOutlineIcon sx={{ minWidth: '22px' }}>
                    <AttachMoneyIcon sx={{ width: '22px', height: '22px' }} />
                  </MailOutlineIcon>
                  <StyledText>Pricing</StyledText>
                </StyledListItem>
              </ListItem>
              <ListItem disablePadding>
                <StyledListItem>
                  <ChatBubbleOutlineIcon sx={{ minWidth: '22px' }}>
                    <HelpOutlineIcon sx={{ width: '22px', height: '22px' }} />
                  </ChatBubbleOutlineIcon>
                  <StyledText>FAQ</StyledText>
                </StyledListItem>
              </ListItem>
            </Box>
            <ListItem disablePadding>
              <StyledListItem>
                <ChatBubbleOutlineIcon sx={{ minWidth: '22px' }}>
                  <LoginIcon sx={{ width: '22px', height: '22px' }} />
                </ChatBubbleOutlineIcon>
                <StyledText>Logout</StyledText>
              </StyledListItem>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Popover>
  );
};
