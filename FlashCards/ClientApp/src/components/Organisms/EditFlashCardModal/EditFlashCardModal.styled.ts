import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

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
`;

