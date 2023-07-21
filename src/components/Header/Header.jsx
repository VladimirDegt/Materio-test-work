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
import { ModalProfile } from 'components/Modals/Profile/Profile';
import {
  handleOpenModal,
  handleCloseModal,
  handleClickTheme,
} from 'utils/handlers';

export const Header = ({ toggleTheme }) => {
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModalLang, setOpenModalLang] = useState(false);
  const [openModalShortcuts, setOpenModalShortcuts] = useState(false);
  const [openModalNotifications, setOpenModalNotifications] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);

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
              onClick={e => handleOpenModal(e, setOpen)}
            >
              <IconSearch />
            </StyledContainerIconButton>
            <StyledContainerIconButton
              type="button"
              onClick={e => handleOpenModal(e, setOpenModalLang)}
            >
              <IconLanguageOutline />
            </StyledContainerIconButton>
            <StyledContainerIconButton
              type="button"
              onClick={() => handleClickTheme(setIsDark, toggleTheme)}
            >
              {isDark ? <BrightnessHighIcon /> : <IconMoonStars />}
            </StyledContainerIconButton>
            <StyledContainerIconButton
              type="button"
              onClick={e => handleOpenModal(e, setOpenModalShortcuts)}
            >
              <IconIconGrid />
            </StyledContainerIconButton>
            <StyledContainerIconButton
              type="button"
              onClick={e => handleOpenModal(e, setOpenModalNotifications)}
            >
              <IconBellBadgeOutline />
            </StyledContainerIconButton>
            <StyledUserMiniButton
              type="button"
              onClick={e => handleOpenModal(e, setOpenModalProfile)}
            >
              <img src={UserMini} alt="user" width={40} height={40} />
            </StyledUserMiniButton>
          </StyledBoxIconsDiv>
        </StyledContentTopHeaderDiv>
      </StyledTopHeaderDiv>

      {open && (
        <ModalSearch
          isOpen={open}
          handleCloseModal={handleCloseModal}
          setState={setOpen}
        />
      )}

      {openModalLang && (
        <ModalLang
          isOpen={openModalLang}
          handleCloseModal={handleCloseModal}
          setState={setOpenModalLang}
        />
      )}

      {openModalShortcuts && (
        <ModalShortcuts
          isOpen={openModalShortcuts}
          handleCloseModal={handleCloseModal}
          setState={setOpenModalShortcuts}
        />
      )}

      {openModalNotifications && (
        <ModalNotifications
          isOpen={openModalNotifications}
          handleCloseModal={handleCloseModal}
          setState={setOpenModalNotifications}
        />
      )}

      {openModalProfile && (
        <ModalProfile
          isOpen={openModalProfile}
          handleCloseModal={handleCloseModal}
          setState={setOpenModalProfile}
        />
      )}
    </StyledHeader>
  );
};
