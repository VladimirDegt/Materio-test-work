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

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
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
            <StyledContainerIconButton type="button" onClick={handleOpenModal}>
              <IconSearch />
            </StyledContainerIconButton>
            <StyledContainerIconButton type="button">
              <IconLanguageOutline />
            </StyledContainerIconButton>
            <StyledContainerIconButton type="button">
              <IconMoonStars />
            </StyledContainerIconButton>
            <StyledContainerIconButton type="button">
              <IconIconGrid />
            </StyledContainerIconButton>
            <StyledContainerIconButton type="button">
              <IconBellBadgeOutline />
            </StyledContainerIconButton>
            <StyledUserMiniButton type="button">
              <img src={UserMini} alt="user" width={40} height={40} />
            </StyledUserMiniButton>
          </StyledBoxIconsDiv>
        </StyledContentTopHeaderDiv>
      </StyledTopHeaderDiv>
      <nav></nav>
      {open && (
        <ModalSearch isOpen={open} handleCloseModal={handleCloseModal} />
      )}
    </StyledHeader>
  );
};
