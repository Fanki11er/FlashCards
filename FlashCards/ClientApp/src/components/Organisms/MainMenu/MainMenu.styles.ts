import styled from 'styled-components';

export const MainMenuWrapper = styled.div`
    width: 100%;
    padding:    55px 20px;
    background: linear-gradient(135deg, #5172bf, #4eb1d1);
    border-radius: 15px;
    display: grid;
    grid-template-rows: 0.33fr 0.67fr;
    grid-column: 2/span 1;
    grid-row-gap: 40px;

`;

export const MenuButtonsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-row: 2/span 1;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`;


