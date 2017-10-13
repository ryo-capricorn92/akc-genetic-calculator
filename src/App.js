import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

import Header from './presentation/Header';
import Splash from './presentation/Splash';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash>A slim and trim genetic calculator<br />to make your life just a little easier</Splash>
      </div>
    );
  }
}

export default App;
