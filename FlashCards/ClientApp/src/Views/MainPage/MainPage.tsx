import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import endpoints from '../../Api/endpoints';
import MainMenu from '../../components/Organisms/MainMenu/MainMenu';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import { FlashCardsStatus } from '../../Interfaces/Interfaces';
import routes from '../../Routes/routes';
import { MainPageWrapper } from './MainPage.styles';

type LocationProps = {
  state: {
    refresh: boolean;
  };
};

const MainPage = () => {
  const { statusEndpoint } = endpoints;
  const { login } = routes;
  const [flashCardsInfo, setFlashCardsInfo] = useState<FlashCardsStatus>();
  console.log(flashCardsInfo);
  const navigate = useNavigate();
  const location = useLocation() as LocationProps;
  const refresh = location.state?.refresh;
  console.log(refresh);
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getFlashCardsInfo = async () => {
      try {
        const response = await axiosPrivate.get(statusEndpoint, {
          signal: controller.signal,
        });
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
  }, [statusEndpoint, navigate, location, login, axiosPrivate, refresh]);
  return (
    <MainPageWrapper>
      <MainMenu flashCardsInfo={flashCardsInfo} />
    </MainPageWrapper>
  );
};
export default MainPage;
