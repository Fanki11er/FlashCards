import { ArrowButton } from '../../Atoms/ArrowButton/ArrowButton';
import { TextField } from '../../Atoms/TextField/TextField';
import LearnAnswerForm from '../LearnAnswerForm/LearnAnswerForm';
import { BottomSection, FormWrapper, LearnSectionWrapper, StyledHut, StyledSpan } from './LearnSection.styles';

const LearningSection = () => {
  return (
    <LearnSectionWrapper>
      <FormWrapper>
        <TextField>Hello</TextField>
        <LearnAnswerForm />
      </FormWrapper>
      <BottomSection>
        <StyledSpan>1 / 10</StyledSpan>
        <ArrowButton />
      </BottomSection>
      <StyledHut />
    </LearnSectionWrapper>
  );
};

export default LearningSection;

