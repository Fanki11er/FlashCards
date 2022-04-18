import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTemplate from './Templates/MainTemplate/MainTemplate';
import GlobalStyle from './Theme/GlobalStyles';
import { theme } from './Theme/theme';
import HeroPage from './Views/HeroPage/HeroPage';
import LoginPage from './Views/LoginPage/LoginPage';
import RegistrationPage from './Views/RegistrationPage/RegistrationPage';
import routes from './Routes/routes';
import MainPage from './Views/MainPage/MainPage';
import AuthProvider from './Providers/AuthProvider';
import RequireAuth from './components/Molecules/RequireAuth/RequireAuth';
import MaintenancePage from './Views/MaintenancePage/MaintenancePage';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
//import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
//import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

const App = () => {
  const { index, login, registration, main, maintenance } = routes;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route path={index} element={<MainTemplate />}>
              <Route index element={<HeroPage />} />
              <Route path={login} element={<LoginPage />} />
              <Route path={registration} element={<RegistrationPage />} />
              <Route element={<RequireAuth />}>
                <Route path={main} element={<MainPage />} />
              
              </Route>
              <Route path={maintenance} element={<MaintenancePage/>}/>
              <Route path="*" element={<div>404</div>} />
            </Route>
          </Routes>
        </AuthProvider>
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
