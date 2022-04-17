import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import endpoints from '../../Api/endpoints';
import LearningSection from '../../components/Organisms/LearnSection/LearnSection';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import { FlashCard } from '../../Interfaces/Interfaces';
import routes from '../../Routes/routes';
import { LearningPageWrapper } from './LearningPage.styles';

const LearningPage = () => {
  const { learnEndpoint, updateEndpoint } = endpoints;
  const { login } = routes;
  const [flashCardsToLearn, setFlashCardsToLearn] = useState<FlashCard[]>([]);
  const [isUpdating, setIsUpdating] = useState<boolean>();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getLearnPortion = async () => {
      try {
        const response = await axiosPrivate.get(learnEndpoint, {
          signal: controller.signal,
        });
        isMounted && setFlashCardsToLearn(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        navigate(login, {
          state: {
            from: location,
          },
          replace: true,
        });
      }
    };

    getLearnPortion();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [navigate, location, login, axiosPrivate, learnEndpoint]);

  const updateFlashCard = async (flashCard: FlashCard) => {
    setIsUpdating(true);
    console.log(isUpdating);

    try {
      const response = await axiosPrivate.put(updateEndpoint, JSON.stringify(flashCard), {
        headers: { 'Content-Type': 'application/json' },
      });
      setIsUpdating(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setIsUpdating(false);
    }
  };
  return (
    <LearningPageWrapper>
      <LearningSection flashCardsToLearn={flashCardsToLearn} updateFlashCard={updateFlashCard} />
    </LearningPageWrapper>
  );
};

export default LearningPage;

