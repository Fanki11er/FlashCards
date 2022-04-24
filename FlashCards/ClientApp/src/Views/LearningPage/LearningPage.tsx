import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import endpoints from '../../Api/endpoints';
import LoadingError from '../../components/Molecules/LoadingError/LoadingError';
import LoadingFlashCards from '../../components/Molecules/LoadingFlashCards/LoadingFlashCards';
import LearningSection from '../../components/Organisms/LearnSection/LearnSection';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import { FlashCard } from '../../Interfaces/Interfaces';
import routes from '../../Routes/routes';
import { InformationField, InfoWrapper, LearningPageWrapper, NothingToLearn } from './LearningPage.styles';

const LearningPage = () => {
  const { learnEndpoint, updateLearnedFlashCardEndpoint } = endpoints;
  const { login } = routes;
  const [flashCardsToLearn, setFlashCardsToLearn] = useState<FlashCard[]>([]);
  const [isUpdating, setIsUpdating] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [refresh, setRefresh] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getLearnPortion = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await axiosPrivate.get(learnEndpoint, {
          signal: controller.signal,
        });
        isMounted && setFlashCardsToLearn(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error: any) {
        setIsLoading(false);
        setError(error.message);
        console.log(error.message);
        /*navigate(login, {
          state: {
            from: location,
          },
          replace: true,
        });*/
      }
    };

    getLearnPortion();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [navigate, location, login, axiosPrivate, learnEndpoint, refresh]);

  const updateFlashCard = async (flashCard: FlashCard) => {
    setIsUpdating(true);
    console.log(isUpdating);

    try {
      const response = await axiosPrivate.post(updateLearnedFlashCardEndpoint, JSON.stringify(flashCard), {
        headers: { 'Content-Type': 'application/json' },
      });
      setIsUpdating(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setIsUpdating(false);
    }
  };

  const refreshFlashCards = () => {
    setRefresh(!refresh);
  };
  return (
    <LearningPageWrapper>
      {isLoading ? (
        <LoadingFlashCards />
      ) : !isError ? (
        flashCardsToLearn.length ? (
          <LearningSection flashCardsToLearn={flashCardsToLearn} updateFlashCard={updateFlashCard} refresh={refreshFlashCards} />
        ) : (
          <InfoWrapper>
            <NothingToLearn />
            <InformationField>Brak fiszek na dziś</InformationField>
          </InfoWrapper>
        )
      ) : (
        <LoadingError errorText={isError} />
      )}
    </LearningPageWrapper>
  );
};

export default LearningPage;
