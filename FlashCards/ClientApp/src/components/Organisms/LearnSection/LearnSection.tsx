import { useState } from 'react';
import { FlashCard } from '../../../Interfaces/Interfaces';
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

interface Props {
  flashCardsToLearn: FlashCard[];
  updateFlashCard: (flashCard: FlashCard) => Promise<void>;
}

const LearningSection = (props: Props) => {
  const { flashCardsToLearn, updateFlashCard } = props;
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const checkAnswer = (answer: string) => {
    setIsCorrectAnswer(false);
    if (answer.toLowerCase() === flashCardsToLearn[currentIndex].backText.toLowerCase()) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
    setIsAnswered(true);
    updateFlashCard(changeFlashCardFields(flashCardsToLearn[currentIndex], isCorrectAnswer));
  };

  const nextFlashCard = () => {
    if (currentIndex < flashCardsToLearn.length) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
    }
  };

  const changeFlashCardFields = (flashCard: FlashCard, isCorrect: boolean) => {
    if (isCorrect) {
      flashCard.status = 'OK';
      flashCard.correctAtRow = flashCard.correctAtRow + 1;
    } else {
      flashCard.status = 'LEARN';
      flashCard.correctAtRow = 0;
    }
    return flashCard;
  };

  return (
    <LearnSectionWrapper>
      {!isAnswered ? (
        <FormWrapper>
          <TextField>{flashCardsToLearn.length > 0 ? flashCardsToLearn[currentIndex].frontText : ''}</TextField>
          <LearnAnswerForm checkAnswer={checkAnswer} flashCards={flashCardsToLearn.length > 0} />
        </FormWrapper>
      ) : (
        <ResultWrapper>
          <StyledTextField correct={isCorrectAnswer}>Hello</StyledTextField>
          <StyledTextField correct={isCorrectAnswer}>Hello</StyledTextField>
          {isCorrectAnswer ? <StyledCorrect /> : <StyledWrong />}
        </ResultWrapper>
      )}

      <BottomSection>
        <StyledSpan>{`${currentIndex + 1} / ${flashCardsToLearn.length}`}</StyledSpan>
        {isAnswered ? <ArrowButton onClick={() => nextFlashCard()} /> : null}
      </BottomSection>
      <StyledHut />
    </LearnSectionWrapper>
  );
};

export default LearningSection;

