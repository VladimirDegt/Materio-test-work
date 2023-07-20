import { useState } from 'react';
import Logo from '../../images/logo.svg';
import UserMini from '../../images/user-mini.svg';
import {
  StyledLogo,
  StyledP,
  StyledHeader,
  StyledTopHeaderDiv,
  StyledContainerIconButton,
  StyledBoxIconsDiv,
  StyledUserMiniButton,
  StyledContentTopHeaderDiv,
} from './Header.styled';
import IconSearch from 'icons/search';
import IconLanguageOutline from 'icons/language';
import IconMoonStars from 'icons/moon';
import IconIconGrid from 'icons/icongrid';
import IconBellBadgeOutline from 'icons/bell';
import ModalSearch from 'components/Modals/Search/Search';
import { ModalLang } from 'components/Modals/Lang/Lang';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { ModalShortcuts } from 'components/Modals/Shortcuts/Shortcuts';
import { ModalNotifications } from 'components/Modals/Notifications/Notifications';

export const Header = ({ toggleTheme }) => {
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModalLang, setOpenModalLang] = useState(false);
  const [openModalShortcuts, setOpenModalShortcuts] = useState(false);
  const [openModalNotifications, setOpenModalNotifications] = useState(false);

  const handleOpenModalSearch = () => {
    setOpen(true);
  };

  const handleCloseModalSearch = () => {
    setOpen(false);
  };

  const handleOpenModalLang = e => {
    setOpenModalLang(e.currentTarget);
  };

  const handleCloseModalLang = () => {
    setOpenModalLang(false);
  };

  const handleClickTheme = () => {
    setIsDark(prevState => !prevState);
    toggleTheme();
  };

  const handleOpenModalShortcuts = e => {
    setOpenModalShortcuts(e.currentTarget);
  };

  const handleCloseModalShortcuts = () => {
    setOpenModalShortcuts(false);
  };

  const handleOpenModalNotifications = e => {
    setOpenModalNotifications(e.currentTarget);
  };

  const handleCloseModalNotifications = () => {
    setOpenModalNotifications(false);
  };

  return (
    <StyledHeader>
      <StyledTopHeaderDiv>
        <StyledContentTopHeaderDiv>
          <StyledLogo href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/dashboards/analytics/">
            <img src={Logo} alt="logo" width={30} height={25} />
            <StyledP>MATERIO</StyledP>
          </StyledLogo>

          <StyledBoxIconsDiv>
            <StyledContainerIconButton
              type="button"
              onClick={handleOpenModalSearch}
            >
              <IconSearch />
            </StyledContainerIconButton>
            <StyledContainerIconButton
              type="button"
              onClick={handleOpenModalLang}
            >
              <IconLanguageOutline />
            </StyledContainerIconButton>
            <StyledContainerIconButton type="button" onClick={handleClickTheme}>
              {isDark ? <BrightnessHighIcon /> : <IconMoonStars />}
            </StyledContainerIconButton>
            <StyledContainerIconButton
              type="button"
              onClick={handleOpenModalShortcuts}
            >
              <IconIconGrid />
            </StyledContainerIconButton>
            <StyledContainerIconButton
              type="button"
              onClick={handleOpenModalNotifications}
            >
              <IconBellBadgeOutline />
            </StyledContainerIconButton>
            <StyledUserMiniButton type="button">
              <img src={UserMini} alt="user" width={40} height={40} />
            </StyledUserMiniButton>
          </StyledBoxIconsDiv>
        </StyledContentTopHeaderDiv>
      </StyledTopHeaderDiv>

      {open && (
        <ModalSearch isOpen={open} handleCloseModal={handleCloseModalSearch} />
      )}

      {openModalLang && (
        <ModalLang
          isOpen={openModalLang}
          handleCloseModal={handleCloseModalLang}
        />
      )}

      {openModalShortcuts && (
        <ModalShortcuts
          isOpen={openModalShortcuts}
          handleCloseModal={handleCloseModalShortcuts}
        />
      )}

      {openModalNotifications && (
        <ModalNotifications
          isOpen={openModalNotifications}
          handleCloseModal={handleCloseModalNotifications}
        />
      )}
    </StyledHeader>
  );
};
