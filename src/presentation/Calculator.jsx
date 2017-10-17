import React from 'react';
import styled from 'styled-components';

import BreedItem from './BreedItem';

const BreedList = styled.div.withConfig({
  displayName: 'BreedList',
})`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding: 25px;

  @media screen and (min-width: 1350px) { grid-template-columns: repeat(4, 1fr); }
  @media screen and (min-width: 1750px) { grid-template-columns: repeat(5, 1fr); }
  @media screen and (min-width: 2150px) { grid-template-columns: repeat(6, 1fr); }
`;

const Calculator = () => (
  <div>
    <h1>Pick a breed</h1>
    <BreedList>
      <BreedItem
        img="http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/Bull-Terrier.jpg"
        name="Bull Terrier"
      />
    </BreedList>
  </div>
);

export default Calculator;
