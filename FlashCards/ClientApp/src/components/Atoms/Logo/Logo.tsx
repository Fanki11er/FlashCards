import { ReactComponent as Logo } from '../../../Assets/Svg/Logo.svg';
import { ReactComponent as TransparentLogo } from '../../../Assets/Svg/TransparentLogo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled(Logo)`
  height: 150px;
  margin: 25px 0 0 25px;
`;

export default StyledLogo;

export const Test = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const StyledTransparentLogo = styled(TransparentLogo)`
      width: 20%;
      height: 80%;
`;