import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTemplate from './Templates/MainTemplate/MainTemplate';
import GlobalStyle from './Theme/GlobalStyles';
import { theme } from './Theme/theme';
import HeroPage from './Views/HeroPage/HeroPage';
import LoginPage from './Views/LoginPage/LoginPage';
import RegistrationPage from './Views/RegistrationPage/RegistrationPage';
import routes from './Routes/routes';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
//import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
//import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

const App = () => {
  const { index, login, registration } = routes;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={index} element={<MainTemplate />}>
            <Route index element={<HeroPage />} />
            <Route path={login} element={<LoginPage />} />
            <Route path={registration} element={<RegistrationPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
export default App;
/*
  <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
 */
