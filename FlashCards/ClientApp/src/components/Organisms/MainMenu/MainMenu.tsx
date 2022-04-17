import { Link } from 'react-router-dom';
import { FlashCardsStatus } from '../../../Interfaces/Interfaces';
import routes from '../../../Routes/routes';
import { MainMenuButton } from '../../Atoms/Buttons/Buttons';
import FlashCardsInfo from '../../Molecules/FlashCardsInfo/FlashCardsInfo';
import { MainMenuWrapper, MenuButtonsWrapper } from './MainMenu.styles';

interface Props {
  flashCardsInfo: FlashCardsStatus | undefined;
}

const MainMenu = (props: Props) => {
  const { learn } = routes;
  return (
    <MainMenuWrapper>
      <FlashCardsInfo flashCardsInfo={props.flashCardsInfo} />
      <MenuButtonsWrapper>
        <MainMenuButton as={Link} to={learn}>
          Ucz się
        </MainMenuButton>
        <MainMenuButton>Dodaj fiszkę</MainMenuButton>
        <MainMenuButton>Edytuj fiszkę</MainMenuButton>
        <MainMenuButton>Usuń fiszkę</MainMenuButton>
      </MenuButtonsWrapper>
    </MainMenuWrapper>
  );
};
export default MainMenu;
