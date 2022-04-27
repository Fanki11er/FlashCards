import styled from 'styled-components';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
<<<<<<< HEAD
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

=======
import { ReactComponent as Earth } from '../../../Assets/Svg/Earth.svg';

export const StyledLoginForm = styled(StyledForm)`
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  padding-left: 4rem;
  position: relative;
`;

export const ConnectionInfo = styled(Earth)`
  width: 40%;
  height: 60%;
  display: flex;
  justify-self: center;
  opacity: 0;
  animation-name: show;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
>>>>>>> @{-1}
`;
