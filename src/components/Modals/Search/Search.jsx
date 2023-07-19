import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import debounce from 'lodash/debounce';
import { Grid, List, ListItem, Typography, Link } from '@mui/material';
import {
  StyledInput,
  StyledBoxIconClose,
  SyledEscButton,
  StyledTitle,
  StyledContainerListItem,
  StyledTextListItem,
  StyledList,
} from './Search.styled';
import IconClose from 'icons/close';
import IconSearch from 'icons/search';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TabIcon from '@mui/icons-material/Tab';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GridViewIcon from '@mui/icons-material/GridView';
import DateRangeIcon from '@mui/icons-material/DateRange';
import IconTypography from 'icons/typography';
import IconCardBulletedSettingsOutline from 'icons/cards';
import IconFormatListCheckbox from 'icons/select-list';

export default function ModalSearch({ isOpen, handleCloseModal }) {
  const [open, setOpen] = useState(isOpen);
  const [_, setInputValue] = useState('');

  const debouncedSetInput = debounce(value => setInputValue(value), 500);

  const handleInput = ({ target }) => {
    debouncedSetInput(target.value);
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseModal();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <FormControl variant="standard">
          <StyledInput
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <IconSearch />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <StyledBoxIconClose>
                  <SyledEscButton onClick={handleClose}>
                    <Typography>[esc]</Typography>
                  </SyledEscButton>
                  <SyledEscButton onClick={handleClose}>
                    <IconClose />
                  </SyledEscButton>
                </StyledBoxIconClose>
              </InputAdornment>
            }
            onChange={handleInput}
          />
        </FormControl>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <StyledTitle>Popular Searches</StyledTitle>
              <StyledList>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/dashboards/crm/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <DataSaverOffIcon />
                      <StyledTextListItem>Analytics</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/dashboards/analytics/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <EqualizerIcon />
                      <StyledTextListItem>Analytics</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/dashboards/ecommerce/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <BubbleChartIcon />
                      <StyledTextListItem>eCommerce</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/apps/user/list/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <GroupsIcon />
                      <StyledTextListItem>User List</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
              </StyledList>
            </Grid>
            <Grid item xs={6}>
              <StyledTitle>Apps & Pages</StyledTitle>
              <StyledList>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/apps/calendar/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <CalendarTodayIcon />
                      <StyledTextListItem>Calendar</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/apps/invoice/list/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <FormatListNumberedIcon />
                      <StyledTextListItem>Invoice List</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/pages/pricing/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <AttachMoneyIcon />
                      <StyledTextListItem>Pricing</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/pages/account-settings/account/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <ManageAccountsIcon />
                      <StyledTextListItem>Account Settings</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
              </StyledList>
            </Grid>
            <Grid item xs={6}>
              <StyledTitle>User Interface</StyledTitle>
              <StyledList>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/ui/typography/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <IconTypography />
                      <StyledTextListItem>Typography</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/components/tabs/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <TabIcon />
                      <StyledTextListItem>Tabs</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/components/buttons/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <TouchAppIcon />
                      <StyledTextListItem>Buttons</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/ui/cards/advanced/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <IconCardBulletedSettingsOutline />
                      <StyledTextListItem>Advanced Cards</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
              </StyledList>
            </Grid>
            <Grid item xs={6}>
              <StyledTitle>Forms & Tables</StyledTitle>
              <StyledList>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/forms/form-elements/select/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <IconFormatListCheckbox />
                      <StyledTextListItem>Select</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/forms/form-elements/autocomplete/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <MoreHorizIcon />
                      <StyledTextListItem>Autocomplete</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/tables/mui/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <GridViewIcon />
                      <StyledTextListItem>Table</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/forms/form-elements/pickers/"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledContainerListItem>
                      <DateRangeIcon />
                      <StyledTextListItem>Date Pickers</StyledTextListItem>
                    </StyledContainerListItem>
                  </Link>
                </ListItem>
              </StyledList>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
