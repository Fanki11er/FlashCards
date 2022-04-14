import { Formik } from 'formik';
//import { useContext } from 'react';
import axios from '../../../Api/axios';
import endpoints from '../../../Api/endpoints';
//import { AuthContext } from '../../../Providers/AuthProvider';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import FormInput from '../../Molecules/FormInput/FormInput';

interface MyFormValues {
  email: string;
  password: string;
}
const LoginForm = () => {
  const initialValues: MyFormValues = { email: '', password: '' };
  const { login } = endpoints;
  //const { auth, setAuth } = useContext(AuthContext);

  const handleSubmit = async (values: MyFormValues) => {
    try {
      const { email, password } = values;
      const response = await axios.post(
        login,
        JSON.stringify({
          Email: email,
          Password: password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );

      //console.log(response?.data);
      //console.log(JSON.stringify(response));
      const accessToken = response?.data;
      console.log('TOKEN: ' + accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);

        actions.setSubmitting(false);
      }}
    >
      <StyledForm>
        <FormHeader>Logowanie</FormHeader>
        <FormInput name="email" placeholder="Email" label="Email" type="email" />
        <FormInput name="password" placeholder="Hasło" label="Hasło" type="password" />
        <DefaultButton type="submit">Zaloguj</DefaultButton>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
