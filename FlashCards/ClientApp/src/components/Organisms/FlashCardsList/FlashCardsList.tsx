import FlashCardsListElement from "../../Atoms/FlashCardsListElement/FlashCardsListElement";
import { FlashCardsListWrapper } from "./FlashCardsList.styles"


const FlashCardsList = () =>{
    const test = (id:number)=> console.log(id); 

    return (
        <FlashCardsListWrapper>
            <FlashCardsListElement content={'Pierwszy / First'} id={10} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
            <FlashCardsListElement content={'Drugi/ Second'} id={20} select={test}/>
        </FlashCardsListWrapper>
    )
}

export default FlashCardsList;