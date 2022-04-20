import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const FlashCardsListElementWrapper = styled.li`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props: ThemeProps) => props.theme.colors.purple};
    background-color: ${(props: ThemeProps) => props.theme.colors.navigationButton};
    margin-bottom: 15px;
    color: ${(props: ThemeProps) => props.theme.colors.purple};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
    border-radius: 15px;

`;