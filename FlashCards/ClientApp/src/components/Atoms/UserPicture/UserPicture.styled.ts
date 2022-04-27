import styled from "styled-components";
import { ReactComponent as User } from '../../../Assets/Svg/User3.svg';
import { ThemeProps } from "../../../Theme/theme";


export const UserPictureWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-self: flex-start;
        margin-top: -40px;

`;

export const StyledUser = styled(User)`
        width: 65%;
        height: 65%;
        

`;

export const UserName = styled.span`
        border-radius: 15px;
        border: 4px solid black;
        width: fit-content;
        height: 45px;
        margin-top: 10px;
        font-size: ${(props:ThemeProps)=> props.theme.fontSizes.smallError};
        padding: 2px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #DF6C4F;
        font-weight: bold;

`;