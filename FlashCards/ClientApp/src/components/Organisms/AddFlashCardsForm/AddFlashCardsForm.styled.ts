import { StyledForm } from "../../Atoms/StyledForm/StyledForm";
import styled from "styled-components";
import { Field } from "formik";
import { ThemeProps } from "../../../Theme/theme";
import ErrorInfo from "../../Atoms/ErrorInfo/ErrorInfo";

export const StyledAddFlashCardsForm = styled(StyledForm)`
        grid-template-rows: 150px 150px 150px 150px;
        height: 300px;
        width: 100%;
        background: none red;
        background-image: none;
        padding: 0;
        margin: 0;
    
`;

export const ButtonsWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 550px;
        justify-self: center;
        margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
`;

export const NewFlashCardsInput = styled(Field)`
  display: flex;
  width: 100%;
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

export const StyledError = styled(ErrorInfo)`
        width: 100%;
        padding: 0px 10px;
        height: 35px;
        transform: translateX(0);
`;