/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import BreedList from './presentation/BreedList';
import Calculator from './presentation/Calculator';
import Header from './presentation/Header';
import Home from './presentation/Home';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const HomeRedirect = () => (
  <Redirect to="home" />
);

const App = () => (
  <Router>
    <Container>
      <Header />
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeRedirect} />
      <Route path={`${process.env.PUBLIC_URL}/home`} component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/breedlist`} component={BreedList} />
      <Route path={`${process.env.PUBLIC_URL}/calculator/:breed`} component={Calculator} />
    </Container>
  </Router>
);

export default App;
/* eslint-enable react/jsx-filename-extension */
