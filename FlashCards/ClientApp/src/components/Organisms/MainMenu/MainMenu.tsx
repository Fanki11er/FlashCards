import { FlashCardsStatus } from '../../../Interfaces/Interfaces';
import { MainMenuButton } from '../../Atoms/Buttons/Buttons';
import FlashCardsInfo from '../../Molecules/FlashCardsInfo/FlashCardsInfo';
import { MainMenuWrapper, MenuButtonsWrapper } from './MainMenu.styles';

interface Props {
  flashCardsInfo: FlashCardsStatus | undefined;
}

const MainMenu = (props: Props) => {
  return (
    <MainMenuWrapper>
      <FlashCardsInfo flashCardsInfo={props.flashCardsInfo} />
      <MenuButtonsWrapper>
        <MainMenuButton>Ucz się</MainMenuButton>
        <MainMenuButton>Dodaj fiszkę</MainMenuButton>
        <MainMenuButton>Edytuj fiszkę</MainMenuButton>
        <MainMenuButton>Usuń fiszkę</MainMenuButton>
      </MenuButtonsWrapper>
    </MainMenuWrapper>
  );
};
export default MainMenu;
