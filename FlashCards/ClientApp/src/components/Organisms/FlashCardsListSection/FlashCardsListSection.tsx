
import { TextField } from "../../Atoms/TextField/TextField";
import FlashCardsList from "../FlashCardsList/FlashCardsList";
import { FlashCardsListSectionWrapper } from "./FlashCardsListSection.styles"


const FlashCardsListSection = () =>{

    return (
        <FlashCardsListSectionWrapper>
            <TextField/>
            <FlashCardsList/>
        </FlashCardsListSectionWrapper>
    )
}

export default FlashCardsListSection;