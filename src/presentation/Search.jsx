import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  align-items: stretch;
  display: flex;
  margin: 40px 15%;
  justify-content: center;
`;

const SearchBox = styled.input.attrs({ type: 'text' }).withConfig({
  displayName: 'SearchBox',
})`
  border: 1px solid #563F7A;
  border-radius: 0;
  flex-grow: 1;
  font-size: 18px;
  outline: none;
  padding: 10px;

  &:focus,
  &:active {
    outline: none;
  }
`;

const SearchButton = Button.extend.withConfig({
  displayName: 'SearchButton',
})`
  font-size: 18px;
  letter-spacing: 1px;
`;

const Search = () => (
  <Container>
    <SearchBox />
    <SearchButton>Search Breeds</SearchButton>
  </Container>
);

export default Search;
