import { Formik, ErrorMessage } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import FormInput from '../../Molecules/FormInput/FormInput';
import { InputWrapper, StyledRegistrationForm } from './RegistrationForm.styles';
import * as Yup from 'yup';
import ErrorInfo from '../../Atoms/ErrorInfo/ErrorInfo';
import axios from '../../../Api/axios';
import endpoints from '../../../Api/endpoints';

interface MyFormValues {
  name: string;
  password: string;
  email: string;
  confirmPassword: string;
}

class UserRegistrationCredentials {
  Name = '';
  Email = '';
  Password = '';
  ConfirmPassword = '';

  constructor(values: MyFormValues) {
    this.Name = values.name;
    this.Email = values.email;
    this.Password = values.password;
    this.ConfirmPassword = values.confirmPassword;
  }
}

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Login za krótki').required('Pole wymagane'),
  email: Yup.string().email('Nieprawidłowy email').required('Pole wymagane'),
  password: Yup.string().min(6, 'Za króthie hasło').required('Pole wymagane'),
  confirmPassword: Yup.string().min(6, 'Za króthie hasło').required('Pole wymagane'),
});

const RegistrationForm = () => {
  const initialValues: MyFormValues = { name: '', password: '', email: '', confirmPassword: '' };
  const { register } = endpoints;

  const handleSubmit = async (userCredentials: UserRegistrationCredentials) => {
    try {
      const response = await axios.post(register, JSON.stringify(userCredentials), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log(response.data);
      console.log(JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={(values, actions) => {
        const userCredentials = new UserRegistrationCredentials(values);
        console.log('Subiting');
        handleSubmit(userCredentials);

        actions.setSubmitting(false);
      }}
    >
      <StyledRegistrationForm>
        <FormHeader>Rejestracja</FormHeader>
        <InputWrapper>
          <FormInput name="name" placeholder="Name" label="Login*" />
          <ErrorMessage name="name" render={(msg) => <ErrorInfo>{msg}</ErrorInfo>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="email" placeholder="Email" label="Email*" type="email" />
          <ErrorMessage name="email" render={(msg) => <ErrorInfo>{msg}</ErrorInfo>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="password" placeholder="Hasło" label="Hasło*" type="password" />
          <ErrorMessage name="password" render={(msg) => <ErrorInfo>{msg}</ErrorInfo>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="confirmPassword" placeholder="Powtórz Hasło" label="Powtórz Hasło*" type="password" />
          <ErrorMessage name="confirmPassword" render={(msg) => <ErrorInfo>{msg}</ErrorInfo>} />
        </InputWrapper>

        <DefaultButton type="submit">Rejestruj</DefaultButton>
      </StyledRegistrationForm>
    </Formik>
  );
};

export default RegistrationForm;
//<--
//
//
