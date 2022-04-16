import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { axiosPrivate } from '../../Api/axios';
import endpoints from '../../Api/endpoints';
import MainMenu from '../../components/Organisms/MainMenu/MainMenu';
import useAuth from '../../Hooks/useAuth';
import { FlashCardsStatus } from '../../Interfaces/Interfaces';
import routes from '../../Routes/routes';
import { MainPageWrapper } from './MainPage.styles';

const MainPage = () => {
  const { statusEndpoint } = endpoints;
  const { login } = routes;
  const [flashCardsInfo, setFlashCardsInfo] = useState<FlashCardsStatus>();
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getFlashCardsInfo = async () => {
      try {
        const response = await axiosPrivate.get(`${statusEndpoint}:${auth?.id}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setFlashCardsInfo(response.data);
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

    getFlashCardsInfo();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [statusEndpoint, navigate, location, login, auth]);

  return (
    <MainPageWrapper>
      <MainMenu flashCardsInfo={flashCardsInfo} />
    </MainPageWrapper>
  );
};
export default MainPage;
