import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 0.7fr 0.3fr;

  width: 100%;
  height: 100px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  display: grid;
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  width: 65%;
  height: 55px;
  border: 3px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.inputBlue};
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.buttonGreen};
  font-size: ${({ theme }) => theme.fontSizes.navigationButton};
  transition: border 0.5s;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.greenPlaceholder};
    font-size: ${({ theme }) => theme.fontSizes.navigationButton};
  }
  :focus {
    border: 3px solid ${({ theme }) => theme.colors.orange};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.purple};
  font-size: 3rem;
  font-family: 'Roboto';
  justify-self: flex-end;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
