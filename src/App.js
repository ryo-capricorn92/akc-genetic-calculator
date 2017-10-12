import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

import Header from './presentation/Header';

const rotate360 = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  text-align: center;
`;

const AppHeader = styled.header.withConfig({
  displayName: 'AppHeader',
})`
  background-color: #222;
  color: white;
  height: 150px;
  padding: 20px;
`;

const Logo = styled.img.withConfig({
  displayName: 'Logo',
})`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const Title = styled.h1.withConfig({
  displayName: 'Title',
})`
  font-size: 1.5em;
`;

const Intro = styled.p.withConfig({
  displayName: 'Intro',
})`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <AppHeader>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </AppHeader>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Container>
    );
  }
}

export default App;
