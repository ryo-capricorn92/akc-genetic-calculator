import React from 'react';
import styled from 'styled-components';

import BreedItem from './BreedItem';
import Search from './Search';

const Container = styled.div.withConfig({
  displayName: 'BreedList',
})`
  background-color: #fff;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding: 25px;
  padding-top: 0;

  @media screen and (min-width: 1350px) { grid-template-columns: repeat(4, 1fr); }
  @media screen and (min-width: 1750px) { grid-template-columns: repeat(5, 1fr); }
  @media screen and (min-width: 2150px) { grid-template-columns: repeat(6, 1fr); }
`;

const Spreader = styled.div.withConfig({
  displayName: 'Spreader',
})`
  background-color: #eeebf4;
  height: 20px;
`;

const BreedList = () => (
  <div>
    <Spreader />
    <Search />
    <Container>
      <BreedItem
        img="http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/Bull-Terrier.jpg"
        name="Bull Terrier"
      />
      <BreedItem
        img="http://cdn.akc.org/content/hero/ChineseCrestedheroimage.jpg"
        name="Chinese Crested"
      />
      <BreedItem
        img="http://cdn.akc.org/content/hero/MiniatureBullTerrierheroimage.jpg"
        name="Miniature Bull Terrier"
      />
      <BreedItem
        img="http://cdn.akc.org/content/hero/Xoloitzcuintliheroimage.jpg"
        name="Xoloitzcuintli"
      />
    </Container>
  </div>
);

export default BreedList;
