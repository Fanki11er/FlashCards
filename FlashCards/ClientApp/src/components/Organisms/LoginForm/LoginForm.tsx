import { Formik } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import FormInput from '../../Molecules/FormInput/FormInput';

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
        console.log('Login');
        //console.log({ values, actions });
        //alert(JSON.stringify(values, null, 2));
        //actions.setSubmitting(false);
      }}
    >
      <StyledForm>
        <FormHeader>Logowanie</FormHeader>
        <FormInput name="login" placeholder="Login" label="Login" />
        <FormInput name="password" placeholder="Hasło" label="Hasło" type="password" />
        <DefaultButton type="submit">Zaloguj</DefaultButton>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
