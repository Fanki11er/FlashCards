import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
//import { Route } from 'react-router';
import MainTemplate from './Templates/MainTemplate/MainTemplate';
import GlobalStyle from './Theme/GlobalStyles';
import { theme } from './Theme/theme';
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
          <MainTemplate />
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
