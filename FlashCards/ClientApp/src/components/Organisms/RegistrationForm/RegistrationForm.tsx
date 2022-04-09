import { Formik, ErrorMessage } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import FormInput from '../../Molecules/FormInput/FormInput';
import { InputWrapper, StyledRegistrationForm } from './RegistrationForm.styles';
import * as Yup from 'yup';
import ErrorInfo from '../../Atoms/ErrorInfo/ErrorInfo';

interface MyFormValues {
  login: string;
  password: string;
  email: string;
}

const RegistrationSchema = Yup.object().shape({
  login: Yup.string().min(2, 'Login za krótki').required('Pole wymagane'),
  email: Yup.string().email('Nieprawidłowy email').required('Pole wymagane'),
  password: Yup.string().min(6, 'Za króthie hasło').required('Pole wymagane'),
});

const RegistrationForm = () => {
  const initialValues: MyFormValues = { login: '', password: '', email: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={(values, actions) => {
        console.log('Reg');
        //console.log({ values, actions });
        //alert(JSON.stringify(values, null, 2));
        //actions.setSubmitting(false);
      }}
    >
      <StyledRegistrationForm>
        <FormHeader>Rejestracja</FormHeader>
        <InputWrapper>
          <FormInput name="login" placeholder="Login" label="Login*" />
          <ErrorMessage name="login" render={(msg) => <ErrorInfo>{msg}</ErrorInfo>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="email" placeholder="Email" label="Email*" type="email" />
          <ErrorMessage name="email" render={(msg) => <ErrorInfo>{msg}</ErrorInfo>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="password" placeholder="Hasło" label="Hasło*" type="password" />
          <ErrorMessage name="password" render={(msg) => <ErrorInfo>{msg}</ErrorInfo>} />
        </InputWrapper>

        <DefaultButton type="submit">Rejestruj</DefaultButton>
      </StyledRegistrationForm>
    </Formik>
  );
};

export default RegistrationForm;
