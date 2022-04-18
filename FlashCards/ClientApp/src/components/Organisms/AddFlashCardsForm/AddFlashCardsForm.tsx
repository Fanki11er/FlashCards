import { ErrorMessage, Formik } from 'formik';
//import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from '../../../Api/axios';
import endpoints from '../../../Api/endpoints';
//import useAuth from '../../../Hooks/useAuth';
//import { AuthUser } from '../../../Interfaces/Interfaces';
import routes from '../../../Routes/routes';
//import routes from '../../../Routes/routes';
import { CancelButton, DefaultButton } from '../../Atoms/Buttons/Buttons';
//import ErrorInfo from '../../Atoms/ErrorInfo/ErrorInfo';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import { ButtonsWrapper, InputWrapper, NewFlashCardsInput, StyledError } from './AddFlashCardsForm.styled';
import * as Yup from 'yup';

interface MyFormValues {
  frontText: string;
  backText: string;
}

/*type LocationProps = {
  state: {
    from: Location;
  };
};*/
const AddFlashCardsForm = () => {
  const initialValues: MyFormValues = { frontText: '', backText: '' };
  const { addFlashCardEndpoint } = endpoints;
  const { main } = routes;
  const navigate = useNavigate();
  //const { login } = routes;
  //const location = useLocation() as LocationProps;
  //const from = location.state?.from?.pathname || '/';
  // @ts-ignore
  // const from = location.state?.from?.pathname || '/';

  const AddingSchema = Yup.object().shape({
    frontText: Yup.string().required('Pole wymagane'),
    backText: Yup.string().required('Pole wymagane'),
  });

  const handleSubmit = async (values: MyFormValues) => {
    try {
      const { frontText, backText } = values;
      const response = await axios.post(
        addFlashCardEndpoint,
        JSON.stringify({
          FrontText: frontText,
          BackText: backText,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );

      console.log(response);
      // navigate(main, { replace: true });
      //navigate(login);
      navigate(main);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddingSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);

        actions.setSubmitting(false);
      }}
    >
      <StyledForm>
        <FormHeader>Dodaj nową</FormHeader>
        <InputWrapper>
          <NewFlashCardsInput name="frontText" placeholder="Przód karty" label="" />
          <ErrorMessage name="frontText" render={(msg) => <StyledError>{msg}</StyledError>} />
        </InputWrapper>
        <InputWrapper>
          <NewFlashCardsInput name="backText" placeholder="Tył karty" label="" />
          <ErrorMessage name="backText" render={(msg) => <StyledError>{msg}</StyledError>} />
        </InputWrapper>

        <ButtonsWrapper>
          <DefaultButton type="submit">Zaloguj</DefaultButton>
          <CancelButton as={Link} to={main}>
            Anuluj
          </CancelButton>
        </ButtonsWrapper>
      </StyledForm>
    </Formik>
  );
};

export default AddFlashCardsForm;
