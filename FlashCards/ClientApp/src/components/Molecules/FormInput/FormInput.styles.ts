import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  width: 100%;
  height: 60px;
  align-items: center;
`;

export const Label = styled.label`
  color: ${(props: ThemeProps) => props.theme.colors.purple};
  font-size: 3rem;
  font-family: 'Roboto';
  width: 100%;
  padding-left: 5rem;
`;
