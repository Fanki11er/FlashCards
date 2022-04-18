import { DefaultField } from '../../Atoms/DefaultField/DefaultField';
import { FormInputWrapper, Label } from './FormInput.styles';

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const FormInput = (props: InputProps) => {
  const { name, label, placeholder, type } = props;
  return (
    <FormInputWrapper>
      <Label>{label}</Label>
      <DefaultField name={name} placeholder={placeholder} type={type ? type : 'text'} />
    </FormInputWrapper>
  );
};

export default FormInput;
