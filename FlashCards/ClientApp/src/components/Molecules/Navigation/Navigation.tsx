import Logo from '../../Atoms/Logo/Logo';
import { NavigationButton } from '../../Atoms/NavigationButton/NavigationButton';
import { ButtonsWrapper, NavigationWrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo />
      <ButtonsWrapper>
        <NavigationButton>Zaloguj</NavigationButton>
        <NavigationButton>Rejestracja</NavigationButton>
      </ButtonsWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
