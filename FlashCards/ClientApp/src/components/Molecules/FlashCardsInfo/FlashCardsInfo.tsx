import FlashCardsAmount from '../../Atoms/FlashCardsAmount/FlashCardsAmount';
import { FlashCardsInfoWrapper } from './FlashCardsInfo.styles';
import { theme } from '../../../Theme/theme';
import { useEffect, useState } from 'react';
import { axiosPrivate } from '../../../Api/axios';
import endpoints from '../../../Api/endpoints';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import routes from '../../../Routes/routes';
import { FlashCardsStatus } from '../../../Interfaces/Interfaces';

const FlashCardsInfo = () => {
  const { status } = endpoints;
  const { login } = routes;
  const [flashCardsInfo, setFlashCardsInfo] = useState<FlashCardsStatus>();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getFlashCardsInfo = async () => {
      try {
        const response = await axiosPrivate.get(status, {
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
  }, [status, navigate, location, login]);

  const { lightBlue, darkOrange, yellow } = theme.colors;
  return (
    <FlashCardsInfoWrapper>
      <FlashCardsAmount color={lightBlue} label={'Nowe'} amount={flashCardsInfo?.NewAmount} />
      <FlashCardsAmount color={darkOrange} label={'Nauka'} amount={flashCardsInfo?.ToLearnAmount} />
      <FlashCardsAmount color={yellow} label={'Wszystkie'} amount={flashCardsInfo?.AllAmount} />
    </FlashCardsInfoWrapper>
  );
};

export default FlashCardsInfo;
