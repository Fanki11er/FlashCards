import styled from 'styled-components';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import { ReactComponent as Login} from '../../../Assets/Svg/LoginPerson.svg';

export const StyledLoginForm = styled(StyledForm)`
        background: linear-gradient(135deg, #5172bf, #4eb1d1);
        padding-left: 4rem;
        position: relative;
`;


export const LoginPerson = styled(Login)`
        position: absolute;
        left: -300px;
        bottom: 0;

`;
