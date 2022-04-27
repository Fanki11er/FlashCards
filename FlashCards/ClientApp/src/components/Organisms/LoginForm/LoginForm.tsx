import { Formik } from 'formik';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import axios from '../../../Api/axios';
import endpoints from '../../../Api/endpoints';
import useAuth from '../../../Hooks/useAuth';
import { AuthUser } from '../../../Interfaces/Interfaces';
//import routes from '../../../Routes/routes';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import FormInput from '../../Molecules/FormInput/FormInput';
import { LoginPerson, StyledLoginForm } from './LoginForm.styles';

interface MyFormValues {
  email: string;
  password: string;
}

type LocationProps = {
  state: {
    from: Location;
  };
};
const LoginForm = () => {
  const initialValues: MyFormValues = { email: '', password: '' };
  const { loginEndpoint } = endpoints;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  //const { login } = routes;
  const location = useLocation() as LocationProps;
  //const from = location.state?.from?.pathname || '/';
  // @ts-ignore
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (values: MyFormValues) => {
    try {
      const { email, password } = values;
      const response = await axios.post(
        loginEndpoint,
        JSON.stringify({
          Email: email,
          Password: password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      response && setAuth(response?.data as AuthUser);
      console.log(response);
      console.log(from);
      navigate('/Main', { replace: true });
      //navigate(login);
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
      <StyledLoginForm>
        <FormHeader>Logowanie</FormHeader>
        <FormInput name="email" placeholder="Email" label="Email" type="email" />
        <FormInput name="password" placeholder="Hasło" label="Hasło" type="password" />
        <DefaultButton type="submit">Zaloguj</DefaultButton>
        <LoginPerson/>
      </StyledLoginForm>
    </Formik>
  );
};

export default LoginForm;
