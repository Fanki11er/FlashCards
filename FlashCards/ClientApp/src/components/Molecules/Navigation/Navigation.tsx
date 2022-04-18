import Logo, { Test } from '../../Atoms/Logo/Logo';
import { NavigationButton } from '../../Atoms/NavigationButton/NavigationButton';
import { ButtonsWrapper, NavigationWrapper } from './Navigation.styles';
import routes from '../../../Routes/routes';
import { useLocation } from 'react-router';

const Navigation = () => {
  const { login, registration, main, learn } = routes;

  const { pathname } = useLocation();
  return (
    <NavigationWrapper>
      <Test to={'/'}>
        <Logo />
      </Test>
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
      {(pathname === main || pathname === learn || pathname === '/Maintenance') && (
        <ButtonsWrapper>
          <NavigationButton to="/">Wyloguj</NavigationButton>
        </ButtonsWrapper>
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
