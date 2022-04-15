import { MainMenuButton } from "../../Atoms/Buttons/Buttons";
import FlashCardsInfo from "../../Molecules/FlashCardsInfo/FlashCardsInfo";
import { MainMenuWrapper, MenuButtonsWrapper } from "./MainMenu.styles";

const MainMenu = ()=>{
    return(
       <MainMenuWrapper>
           <FlashCardsInfo/>
           <MenuButtonsWrapper>
                <MainMenuButton>
                    Ucz się
                </MainMenuButton>
                <MainMenuButton>
                    Dodaj fiszkę
                </MainMenuButton>
                <MainMenuButton>
                    Edytuj fiszkę
                </MainMenuButton>
                <MainMenuButton>
                    Usuń fiszkę
                </MainMenuButton>
           </MenuButtonsWrapper>
        
       </MainMenuWrapper>
       
    )
}
export default MainMenu; 
