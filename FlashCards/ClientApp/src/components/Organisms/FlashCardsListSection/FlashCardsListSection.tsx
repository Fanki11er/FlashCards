import { useEffect, useState } from 'react';
import endpoints from '../../../Api/endpoints';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import { FlashCard } from '../../../Interfaces/Interfaces';
import { FormError } from '../../Atoms/FormError/FormError';
import { TextField } from '../../Atoms/TextField/TextField';
import { StyledConnectionInfo } from '../EditFlashCardForm/EditFlashCardForm.styled';
import FlashCardsList from '../FlashCardsList/FlashCardsList';
import { FlashCardsListSectionWrapper } from './FlashCardsListSection.styles';
interface Props {
  openModal: (flashCard: FlashCard) => void;
}

const FlashCardsListSection = (props: Props) => {
  const { openModal } = props;
  const { allFlashCards } = endpoints;
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState('');
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getFlashCards = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await axiosPrivate.get(allFlashCards, {
          signal: controller.signal,
        });
        isMounted && setFlashCards(response.data);
        setIsLoading(false);
      } catch (error: any) {
        if (!error?.response) {
          setError('Błąd połączenia');
        } else if (error.response?.status === 401) {
          setError('Brak autoryzacji');
        } else {
          setError('Błąd ładowania');
        }
        setIsLoading(false);
        /*navigate(login, {
              state: {
                from: location,
              },
              replace: true,
            });*/
      }
    };

    getFlashCards();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [allFlashCards, axiosPrivate]);

  return (
    <FlashCardsListSectionWrapper>
      <TextField />
      {isLoading ? <StyledConnectionInfo /> : <FlashCardsList flashCards={flashCards} openModal={openModal} />}
      {isError ? <FormError>{isError}</FormError> : null}
    </FlashCardsListSectionWrapper>
  );
};

export default FlashCardsListSection;
