import styled from 'styled-components';
import { Field } from 'formik';
import { ThemeProps } from '../../../Theme/theme';

export const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  width: 100%;
  height: 60px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  display: grid;
  grid-column: 2 / span 1;
  width: 65%;
  height: 55px;
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  padding: 0 15px;
  color: ${(props: ThemeProps) => props.theme.colors.buttonGreen};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  transition: border 0.5s;
  outline: none;
  ::placeholder {
    color: ${(props: ThemeProps) => props.theme.colors.greenPlaceholder};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  }
  :focus {
    border: 3px solid ${(props: ThemeProps) => props.theme.colors.orange};
  }
`;

export const Label = styled.label`
  color: ${(props: ThemeProps) => props.theme.colors.purple};
  font-size: 3rem;
  font-family: 'Roboto';
  justify-self: flex-end;
`;
