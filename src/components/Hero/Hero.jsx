import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeroImg from '../../images/hero.png';
import User from '../../images/user.png';
import {
  StyledSection,
  StyledContainerUserPhotoDiv,
  StyledContainerInfoHeroDiv,
  StyledInfoHeroDiv,
  StyledNameUser,
  StyledInfoUser,
  StyledInfo,
  StyledText,
  StyledButton,
  StyledTextButton,
} from './Hero.styled';
import IconDropInvert from 'icons/drop';
import IconLocation from 'icons/location';
import IconCalendar from 'icons/calendar';
import IconUserCheck from 'icons/user-check';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
      <StyledSection>
        <img src={HeroImg} alt="banner" height="250" width="100%" />
        <StyledContainerUserPhotoDiv>
          <img src={User} alt="user" height="120" width="120" />
        </StyledContainerUserPhotoDiv>
        <StyledContainerInfoHeroDiv>
          <StyledInfoHeroDiv>
            <StyledNameUser>John Doe</StyledNameUser>
            <StyledInfoUser>
              <StyledInfo>
                <IconDropInvert />
                <StyledText>UX Designer</StyledText>
              </StyledInfo>
              <StyledInfo>
                <IconLocation />
                <StyledText>Vatican City</StyledText>
              </StyledInfo>
              <StyledInfo>
                <IconCalendar />
                <StyledText>Joined April 2021</StyledText>
              </StyledInfo>
            </StyledInfoUser>
          </StyledInfoHeroDiv>
          <StyledButton variant="contained" color="secondary">
            <IconUserCheck />
            <StyledTextButton>CONNECTED</StyledTextButton>
          </StyledButton>
        </StyledContainerInfoHeroDiv>
        <Link to="/">
          <StyledButton variant="contained" color="secondary">
            <PersonOutlineIcon />
            <StyledTextButton>PROFILE</StyledTextButton>
          </StyledButton>
        </Link>
      </StyledSection>
    </>
  );
};
