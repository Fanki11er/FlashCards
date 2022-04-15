import axios from '../Api/axios';
import routes from '../Routes/routes';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const { refreshRoute } = routes;

  const refresh = async () => {
    const response = await axios.get(refreshRoute, {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;

