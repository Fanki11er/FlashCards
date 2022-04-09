import { Component } from 'react';
//import { Routes, Route } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
//import { Route } from 'react-router';
import MainTemplate from './Templates/MainTemplate/MainTemplate';
import GlobalStyle from './Theme/GlobalStyles';
import { theme } from './Theme/theme';
import HeroPage from './Views/HeroPage/HeroPage';
import LoginPage from './Views/LoginPage/LoginPage';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
//import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
//import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<MainTemplate />}>
              <Route index element={<HeroPage />} />
              <Route path="/Login" element={<LoginPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </>
    );
  }
}

/*
  <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
 */
