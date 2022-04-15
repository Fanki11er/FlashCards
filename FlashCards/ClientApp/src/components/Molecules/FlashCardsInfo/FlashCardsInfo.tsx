import FlashCardsAmount from "../../Atoms/FlashCardsAmount/FlashCardsAmount";
import { FlashCardsInfoWrapper } from "./FlashCardsInfo.styles"
import { theme } from "../../../Theme/theme";

const FlashCardsInfo = ()=>{
    const {lightBlue, darkOrange, yellow} = theme.colors
    return(
        <FlashCardsInfoWrapper>
            <FlashCardsAmount color={lightBlue} label={'Nowe'} amount={10}/>
            <FlashCardsAmount color={darkOrange} label={'Nauka'} amount={10}/>
            <FlashCardsAmount color={yellow} label={'Wszystkie'} amount={100}/>
        </FlashCardsInfoWrapper>
    )
}

export default FlashCardsInfo;