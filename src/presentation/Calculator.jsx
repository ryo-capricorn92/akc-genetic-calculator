import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  align-items: center;
  display: grid;
  flex-grow: 1;
  grid-template-areas: "dam sire"
                       "result result";
  grid-template-rows: auto auto;
  justify-content: space-around;
  padding: 25px;
`;

const Results = styled.div.withConfig({
  displayName: 'Results',
})`
  display: flex;
  grid-area: result;
  justify-content: center;
  padding: 15px;
`;

const Calculator = () => (
  <Container>
    <div>
      <Button>Add Dam</Button>
    </div>
    <div>
      <Button>Add Sire</Button>
    </div>
    <Results>Results</Results>
  </Container>
);

export default Calculator;
