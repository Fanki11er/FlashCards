import Logo from '../../Atoms/Logo/Logo';
import { NavigationButton } from '../../Atoms/NavigationButton/NavigationButton';
import { ButtonsWrapper, NavigationWrapper } from './Navigation.styles';
import routes from '../../../Routes/routes';

const Navigation = () => {
  const { login, registration } = routes;
  return (
    <NavigationWrapper>
      <Logo />
      <ButtonsWrapper>
        <NavigationButton to={login}>Zaloguj</NavigationButton>
        <NavigationButton to={registration}>Rejestracja</NavigationButton>
      </ButtonsWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
