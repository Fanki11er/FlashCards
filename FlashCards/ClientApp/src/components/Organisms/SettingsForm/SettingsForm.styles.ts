import { Field } from 'formik';
import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const StyledSettingsForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  height: 55px;
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  padding: 0 15px;
  color: ${(props: ThemeProps) => props.theme.colors.buttonGreen};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
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
  color: ${(props: ThemeProps) => props.theme.colors.darkPurple};
  font-weight: bold;
  width: fit-content;
  height: 30px;
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
`;

export const LongInputWrapper = styled.div`
  width: 100%;
  height: 90px;
`;

export const ShortInputWrapper = styled.div`
  width: 210px;
  height: 90px;
  align-self: flex-start;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

