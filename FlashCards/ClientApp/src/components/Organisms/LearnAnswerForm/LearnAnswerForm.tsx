import { Formik } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { AnswerInput, StyledLearnAnswerForm } from './LearnAnswerForm.styles';

interface Props {
  checkAnswer: (answer: string) => void;
}

interface MyFormValues {
  answer: string;
}

const LearnAnswerForm = (props: Props) => {
  const { checkAnswer } = props;
  const initialValues: MyFormValues = { answer: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        checkAnswer(values.answer);

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

