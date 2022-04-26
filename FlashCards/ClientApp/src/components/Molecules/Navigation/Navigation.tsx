import Logo, { Test } from '../../Atoms/Logo/Logo';
import { NavigationButton } from '../../Atoms/NavigationButton/NavigationButton';
import { ButtonsWrapper, NavigationWrapper, StyledWrapper } from './Navigation.styles';
import routes from '../../../Routes/routes';
import { useLocation } from 'react-router';
import UserPicture from '../../Atoms/UserPicture/UserPicture';

const Navigation = () => {
  const { login, registration, main, learn, maintenance } = routes;

  const { pathname } = useLocation();
  return (
    <NavigationWrapper>
      <Test to={'/'}>
        <Logo />
      </Test>
      <StyledWrapper>
      <UserPicture/>
      {pathname === '/' && (
        <ButtonsWrapper>
          <NavigationButton to={login}>Zaloguj</NavigationButton>
          <NavigationButton to={registration}>Rejestracja</NavigationButton>
        </ButtonsWrapper>
      )}
      {pathname === registration && (
        <ButtonsWrapper>
          <NavigationButton to={login}>Zaloguj</NavigationButton>
          <NavigationButton to="/">Powrót</NavigationButton>
        </ButtonsWrapper>
      )}
      {pathname === login && (
        <ButtonsWrapper>
          <NavigationButton to={registration}>Rejestracja</NavigationButton>
          <NavigationButton to="/">Powrót</NavigationButton>
        </ButtonsWrapper>
      )}
      {(pathname === learn || pathname === maintenance) && (
        <ButtonsWrapper>
          <NavigationButton to="/">Wyloguj</NavigationButton>
          <NavigationButton to={main}>Menu</NavigationButton>
        </ButtonsWrapper>
      )}

      {(pathname === main) && (
        <ButtonsWrapper>
          <NavigationButton to="/">Wyloguj</NavigationButton>
        </ButtonsWrapper>
      )}
      </StyledWrapper>
     
    </NavigationWrapper>
  );
};

export default Navigation;
