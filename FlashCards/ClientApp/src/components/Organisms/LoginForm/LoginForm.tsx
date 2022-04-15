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
  name: string;
  password: string;
}
const LoginForm = () => {
  const initialValues: MyFormValues = { name: '', password: '' };
  const { login } = endpoints;
  //const { auth, setAuth } = useContext(AuthContext);

  const handleSubmit = async (values: MyFormValues) => {
    try {
      const { name, password } = values;
      const response = await axios.post(
        login,
        JSON.stringify({
          Name: name,
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
        <FormInput name="name" placeholder="Name" label="name" />
        <FormInput name="password" placeholder="Hasło" label="Hasło" type="password" />
        <DefaultButton type="submit">Zaloguj</DefaultButton>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
