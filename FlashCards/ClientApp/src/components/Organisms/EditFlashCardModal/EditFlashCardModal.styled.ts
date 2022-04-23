import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

interface Props{
    isOpened: boolean;
}
export const EditFlashCardModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props:ThemeProps)=>props.theme.colors.transparentPurple};
    backdrop-filter: blur(5px);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    transform: translateX(${(props: ThemeProps & Props)=>props.isOpened?'0':'-150vw'});
    transition: all 0.5s;

   
`;

