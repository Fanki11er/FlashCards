import { Formik } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import FormInput from '../../Molecules/FormInput/FormInput';
import { StyledRegistrationForm } from './RegistrationForm.styles';

interface MyFormValues {
  login: string;
  password: string;
  email: string;
}
const RegistrationForm = () => {
  const initialValues: MyFormValues = { login: '', password: '', email: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log('Reg');
        //console.log({ values, actions });
        //alert(JSON.stringify(values, null, 2));
        //actions.setSubmitting(false);
      }}
    >
      <StyledRegistrationForm>
        <FormHeader>Rejestracja</FormHeader>
        <FormInput name="login" placeholder="Login" label="Login*" />
        <FormInput name="email" placeholder="Email" label="Email*" type="email" />
        <FormInput name="password" placeholder="Hasło" label="Hasło*" type="password" />
        <DefaultButton type="submit">Rejestruj</DefaultButton>
      </StyledRegistrationForm>
    </Formik>
  );
};

export default RegistrationForm;

