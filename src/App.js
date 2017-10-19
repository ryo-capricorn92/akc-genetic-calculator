/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import BreedList from './presentation/BreedList';
import Calculator from './presentation/Calculator';
import Header from './presentation/Header';
import Home from './presentation/Home';
import Test from './container/Test';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const HomeRedirect = () => (
  <Redirect to="/home" />
);

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container>
        <Header />
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeRedirect} />
        <Route path={`${process.env.PUBLIC_URL}/home`} component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/breedlist`} component={BreedList} />
        <Route path={`${process.env.PUBLIC_URL}/calculator/:breed`} component={Calculator} />
        <Route path={`${process.env.PUBLIC_URL}/test`} component={Test} />
      </Container>
    </Router>
  </Provider>
);

export default App;
/* eslint-enable react/jsx-filename-extension */
