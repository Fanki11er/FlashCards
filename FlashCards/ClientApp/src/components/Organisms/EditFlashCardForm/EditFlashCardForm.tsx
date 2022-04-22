import { Formik } from "formik";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import endpoints from "../../../Api/endpoints";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import routes from "../../../Routes/routes";
import { CancelButton, DefaultButton, DeleteButton } from "../../Atoms/Buttons/Buttons";
import { ButtonsWrapper, EditFlashCardsInput, InputWrapper, StyledEditFlashCardsForm } from "./EditFlashCardForm.styled";

interface MyFormValues {
    frontText: string;
    backText: string;
  }
  
  const EditFlashCardsForm = () => {
    const initialValues: MyFormValues = { frontText: '', backText: '' };
    const { createFlashCardEndpoint } = endpoints;
    const { maintenance } = routes;
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
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
  
        navigate(maintenance);
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
        < StyledEditFlashCardsForm>
          <InputWrapper>
            <EditFlashCardsInput name="frontText" placeholder="Przód karty" label="" />
          </InputWrapper>
          <InputWrapper>
            <EditFlashCardsInput name="backText" placeholder="Tył karty" label="" />
          </InputWrapper>
  
          <ButtonsWrapper>
            <DefaultButton type="submit">
                Dodaj</DefaultButton>
            <DeleteButton type="submit">
                Usuń
            </DeleteButton>
            <CancelButton as={Link} to={maintenance}>
              Anuluj
            </CancelButton>
          </ButtonsWrapper>
        </ StyledEditFlashCardsForm>
      </Formik>
    );
  };
  
  export default EditFlashCardsForm;
  