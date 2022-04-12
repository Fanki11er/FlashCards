import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

const ErrorInfo = styled.div`
  width: fit-content;
  height: 100%;
  color: ${(props: ThemeProps) => props.theme.colors.errorRed};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
  text-align: center;
  justify-self: center;
  font-family: 'Roboto';
  padding: 0 5rem;
  background-color: rgba(42, 93, 158, 0.7);
  border-radius: 5px;
  transform: translateX(7rem);
`;

export default ErrorInfo;

