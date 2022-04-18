import { ErrorMessage, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import endpoints from '../../../Api/endpoints';
import routes from '../../../Routes/routes';
import { CancelButton, DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import { ButtonsWrapper, InputWrapper, NewFlashCardsInput, StyledError, StyledPerson } from './AddFlashCardsForm.styled';
import * as Yup from 'yup';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';

interface MyFormValues {
  frontText: string;
  backText: string;
}

const AddFlashCardsForm = () => {
  const initialValues: MyFormValues = { frontText: '', backText: '' };
  const { createFlashCardEndpoint } = endpoints;
  const { main } = routes;
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const AddingSchema = Yup.object().shape({
    frontText: Yup.string().required('Pole wymagane'),
    backText: Yup.string().required('Pole wymagane'),
  });

  const handleSubmit = async (values: MyFormValues) => {
    try {
      const { frontText, backText } = values;
    //const response = await axiosPrivate.post(
        axiosPrivate.post(
        createFlashCardEndpoint,
        JSON.stringify({
          FrontText: frontText,
          BackText: backText,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );

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
          <DefaultButton type="submit">Dodaj</DefaultButton>
          <CancelButton as={Link} to={main}>
            Anuluj
          </CancelButton>
        </ButtonsWrapper>
        <StyledPerson/>
      </StyledForm>
    </Formik>
  );
};

export default AddFlashCardsForm;
