import { Formik } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { AnswerInput, StyledLearnAnswerForm } from './LearnAnswerForm.styles';

interface MyFormValues {
  email: string;
  password: string;
}

const LearnAnswerForm = () => {
  const initialValues: MyFormValues = { email: '', password: '' };

  const handleSubmit = async (values: MyFormValues) => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);

        actions.setSubmitting(false);
      }}
    >
      <StyledLearnAnswerForm>
        <AnswerInput name="answer" placeholder="Answer" />
        <DefaultButton type="submit">Sprawdź</DefaultButton>
      </StyledLearnAnswerForm>
    </Formik>
  );
};

export default LearnAnswerForm;

