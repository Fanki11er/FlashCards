import { Formik } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import FormInput from '../../Molecules/FormInput/FormInput';
import { StyledForm } from './LoginForm.styles';

interface MyFormValues {
  login: string;
  password: string;
}
const LoginForm = () => {
  const initialValues: MyFormValues = { login: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        //console.log({ values, actions });
        //alert(JSON.stringify(values, null, 2));
        //actions.setSubmitting(false);
      }}
    >
      <StyledForm>
        <FormHeader>Logowanie</FormHeader>
        <FormInput name="login" placeholder="Login" label="Login" errorMessage="Test" />
        <FormInput name="password" placeholder="Hasło" label="Hasło" errorMessage="Test" />
        <DefaultButton type="submit">Zaloguj</DefaultButton>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
