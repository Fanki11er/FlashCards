import { FlashCard } from "../../../Interfaces/Interfaces";
import FlashCardsListElement from "../../Atoms/FlashCardsListElement/FlashCardsListElement";
import { FlashCardsListWrapper } from "./FlashCardsList.styles"


interface Props{
   flashCards: FlashCard[];
    select: (id: number) => void;
}

const FlashCardsList = (props: Props) =>{
   const{flashCards, select} = props;

   const renderFlashCardsList = (flashCards: FlashCard[], select: (id: number) => void )=>{
       return flashCards.map((flashCard: FlashCard)=>{
            return (
                <FlashCardsListElement content={`${flashCard.frontText} / ${flashCard.backText}`} id={flashCard.id} key={flashCard.id} select={select}/>
            )
       });
   }
    return (
        <FlashCardsListWrapper>
           {renderFlashCardsList(flashCards, select)};
        </FlashCardsListWrapper>
    )
}

export default FlashCardsList;