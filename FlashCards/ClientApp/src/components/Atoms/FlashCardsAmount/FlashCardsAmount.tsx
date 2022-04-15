import { AmountInfoSpan, FlashCardsAmountWrapper } from "./FlashCardsAmount.styled"

interface InfoProps{
    color: string;
    amount: number;
    label: string;
}

const FlashCardsAmount = (props: InfoProps)=>{
    const {color, amount, label} = props;
    return (
        <FlashCardsAmountWrapper color={color}>
                <AmountInfoSpan>
                    {amount}
                </AmountInfoSpan>
                <AmountInfoSpan>
                    {label}
                </AmountInfoSpan>
        </FlashCardsAmountWrapper>
    )
}

export default FlashCardsAmount;