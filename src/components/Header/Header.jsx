import Logo from '../../images/logo.svg';
import UserMini from '../../images/user-mini.svg';
import {
  StyledLogo,
  StyledP,
  StyledHeader,
  StyledDiv,
  StyledContainerIconButton,
  StyledBoxIconsDiv,
  StyledUserMiniButton,
} from './Header.styled';
import IconSearch from 'icons/search';
import IconLanguageOutline from 'icons/language';
import IconMoonStars from 'icons/moon';
import IconIconGrid from 'icons/icongrid';
import IconBellBadgeOutline from 'icons/bell';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <div>
          <StyledLogo href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/dashboards/analytics/">
            <img src={Logo} alt="logo" width={30} height={25} />
            <StyledP>MATERIO</StyledP>
          </StyledLogo>
        </div>
        <StyledBoxIconsDiv>
          <StyledContainerIconButton type="button">
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
      </StyledDiv>
      <nav></nav>
    </StyledHeader>
  );
};
