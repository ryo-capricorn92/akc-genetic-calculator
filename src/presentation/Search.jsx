import React from 'react';
import styled from 'styled-components';

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

const SearchButton = styled.button.attrs({ type: 'button' }).withConfig({
  displayName: 'SearchButton',
})`
  background-color: #563F7A;
  border: none;
  border-radius: 0;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  outline: none;
  padding: 10px;
  text-transform: uppercase;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Search = () => (
  <Container>
    <SearchBox />
    <SearchButton>Search Breeds</SearchButton>
  </Container>
);

export default Search;
