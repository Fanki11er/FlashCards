import { ArrowButton } from '../../Atoms/ArrowButton/ArrowButton';
import { TextField } from '../../Atoms/TextField/TextField';
import LearnAnswerForm from '../LearnAnswerForm/LearnAnswerForm';
import {
  BottomSection,
  FormWrapper,
  LearnSectionWrapper,
  ResultWrapper,
  StyledCorrect,
  StyledHut,
  StyledSpan,
  StyledTextField,
  StyledWrong,
} from './LearnSection.styles';

const LearningSection = () => {
  const test = false;
  const correct = false;
  return (
    <LearnSectionWrapper>
      {test ? (
        <FormWrapper>
          <TextField>Hello</TextField>
          <LearnAnswerForm />
        </FormWrapper>
      ) : (
        <ResultWrapper>
          <StyledTextField correct={true}>Hello</StyledTextField>
          <StyledTextField correct={false}>Hello</StyledTextField>
          {correct ? <StyledCorrect /> : <StyledWrong />}
        </ResultWrapper>
      )}

      <BottomSection>
        <StyledSpan>1 / 10</StyledSpan>
        {!test ? <ArrowButton /> : null}
      </BottomSection>
      <StyledHut />
    </LearnSectionWrapper>
  );
};

export default LearningSection;

