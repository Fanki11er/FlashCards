import { Error, FormInputWrapper, Label, StyledField } from './FormInput.styles';

interface InputProps {
  name: string;
  label: string;
  errorMessage: string;
  placeholder: string;
  type?: string;
}

const FormInput = (props: InputProps) => {
  const { name, label, /*errorMessage,*/ placeholder, type } = props;
  return (
    <FormInputWrapper>
      <Label>{label}</Label>
      <StyledField name={name} placeholder={placeholder} type={type ? type : 'text'} />
      <Error name={name} />
    </FormInputWrapper>
  );
};

export default FormInput;
