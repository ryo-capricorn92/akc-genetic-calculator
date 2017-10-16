import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

import Header from './presentation/Header';
import Showcase from './presentation/Showcase';
import Splash from './presentation/Splash';

const ShowcaseContainer = styled.div.withConfig({
  displayName: 'ShowcaseContainer',
})`
  display: flex;
  padding: 35px;
  justify-content: center;

  & section + section {
    margin-left: 35px;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash>A slim and trim genetic calculator<br />to make your life just a little easier</Splash>
        <ShowcaseContainer>
          <Showcase>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor, nisi et pharetra fermentum, massa augue semper purus, consequat mollis felis diam eu tortor. Suspendisse potenti. Curabitur id dapibus metus. Quisque et lectus quis ipsum fermentum porta. Duis blandit elementum diam, quis viverra sapien mattis feugiat. Suspendisse potenti. Fusce tincidunt augue tortor, a auctor nisl finibus sit amet. Sed neque ipsum, lobortis in vehicula at, dapibus id massa. Quisque consectetur iaculis neque in vestibulum. Mauris risus libero, maximus vestibulum scelerisque ut, suscipit sit amet justo. Cras at ex eget lectus rutrum laoreet sit amet sit amet metus.
          </Showcase>
          <Showcase>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor, nisi et pharetra fermentum, massa augue semper purus, consequat mollis felis diam eu tortor. Suspendisse potenti. Curabitur id dapibus metus. Quisque et lectus quis ipsum fermentum porta. Duis blandit elementum diam, quis viverra sapien mattis feugiat. Suspendisse potenti. Fusce tincidunt augue tortor, a auctor nisl finibus sit amet. Sed neque ipsum, lobortis in vehicula at, dapibus id massa. Quisque consectetur iaculis neque in vestibulum. Mauris risus libero, maximus vestibulum scelerisque ut, suscipit sit amet justo. Cras at ex eget lectus rutrum laoreet sit amet sit amet metus.
          </Showcase>
          <Showcase>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor, nisi et pharetra fermentum, massa augue semper purus, consequat mollis felis diam eu tortor. Suspendisse potenti. Curabitur id dapibus metus. Quisque et lectus quis ipsum fermentum porta. Duis blandit elementum diam, quis viverra sapien mattis feugiat. Suspendisse potenti. Fusce tincidunt augue tortor, a auctor nisl finibus sit amet. Sed neque ipsum, lobortis in vehicula at, dapibus id massa. Quisque consectetur iaculis neque in vestibulum. Mauris risus libero, maximus vestibulum scelerisque ut, suscipit sit amet justo. Cras at ex eget lectus rutrum laoreet sit amet sit amet metus.
          </Showcase>
        </ShowcaseContainer>
      </div>
    );
  }
}

export default App;
