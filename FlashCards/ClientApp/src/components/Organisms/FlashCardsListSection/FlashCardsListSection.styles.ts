import styled from 'styled-components';
import { ReactComponent as Update} from '../../../Assets/Svg/UpdatePerson.svg';

export const FlashCardsListSectionWrapper = styled.div`
    width: 80%;
    height: 550px;
    padding: 50px 40px 40px 40px;
    background: linear-gradient(135deg, #5172bf, #4eb1d1);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;


export const UpdatePerson = styled(Update)`
        position: absolute;
        right: -260px;
        bottom: 0;

`;
