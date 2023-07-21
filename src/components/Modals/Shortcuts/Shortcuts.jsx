import { Button, Grid, Popover, Tooltip } from '@mui/material';
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PieChartIcon from '@mui/icons-material/PieChart';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {
  StyledBox,
  StyledText,
  StyledContainerIcon,
  StyledTextTitle,
  StyledTextCart,
  StyledLink,
} from './Shortcuts.styled';
import { handleCloseModalMUI } from 'utils/handlers';

export const ModalShortcuts = ({ isOpen, handleCloseModal, setState }) => {
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
        vertical: 60,
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <StyledBox>
        <StyledText>Shortcuts</StyledText>
        <Tooltip title="Add Shortcut" placement="top">
          <Button
            onClick={() =>
              handleCloseModalMUI(setAnchorEl, handleCloseModal, setState)
            }
          >
            <HighlightOffIcon />
          </Button>
        </Tooltip>
      </StyledBox>

      <Grid
        container
        spacing={0}
        sx={{ margin: 0, width: 370, height: 455, overflowY: 'auto' }}
      >
        <Grid
          item
          xs={6}
          sx={{
            borderBottom: '1px solid rgba(58, 53, 65, 0.12)',
            borderRight: '1px solid rgba(58, 53, 65, 0.12)',
          }}
        >
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/apps/calendar/">
            <StyledContainerIcon>
              <CalendarMonthIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Calendar</StyledTextTitle>
            <StyledTextCart>Appointments</StyledTextCart>
          </StyledLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
        >
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/apps/invoice/list/">
            <StyledContainerIcon>
              <ListAltIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Invoice App</StyledTextTitle>
            <StyledTextCart>Manage Accounts</StyledTextCart>
          </StyledLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            borderBottom: '1px solid rgba(58, 53, 65, 0.12)',
            borderRight: '1px solid rgba(58, 53, 65, 0.12)',
          }}
        >
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/apps/user/list/">
            <StyledContainerIcon>
              <PermIdentityIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Users</StyledTextTitle>
            <StyledTextCart>Manage Users</StyledTextCart>
          </StyledLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
        >
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/apps/roles/">
            <StyledContainerIcon>
              <GppGoodIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Role Management</StyledTextTitle>
            <StyledTextCart>Permissions</StyledTextCart>
          </StyledLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            borderBottom: '1px solid rgba(58, 53, 65, 0.12)',
            borderRight: '1px solid rgba(58, 53, 65, 0.12)',
          }}
        >
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/dashboards/analytics/">
            <StyledContainerIcon>
              <PieChartIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Dashboard</StyledTextTitle>
            <StyledTextCart>User Dashboard</StyledTextCart>
          </StyledLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ borderBottom: '1px solid rgba(58, 53, 65, 0.12)' }}
        >
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/pages/account-settings/account/">
            <StyledContainerIcon>
              <SettingsIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Settings</StyledTextTitle>
            <StyledTextCart>Account Settings</StyledTextCart>
          </StyledLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            borderBottom: '1px solid rgba(58, 53, 65, 0.12)',
            borderRight: '1px solid rgba(58, 53, 65, 0.12)',
          }}
        >
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/pages/help-center/">
            <StyledContainerIcon>
              <HelpOutlineIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Help Center</StyledTextTitle>
            <StyledTextCart>FAQs & Articles</StyledTextCart>
          </StyledLink>
        </Grid>
        <Grid item xs={6}>
          <StyledLink href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/pages/dialog-examples/">
            <StyledContainerIcon>
              <CalendarTodayIcon />
            </StyledContainerIcon>
            <StyledTextTitle>Dialogs</StyledTextTitle>
            <StyledTextCart>Useful Dialogs</StyledTextCart>
          </StyledLink>
        </Grid>
      </Grid>
    </Popover>
  );
};
