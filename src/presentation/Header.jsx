import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  background-color: #fff;
  box-shadow: inset 0px 4px 0px #563F7A;
  display: flex;
  height: 90px;
  justify-content: flex-end;
`;

const Link = styled(NavLink).withConfig({
  displayName: 'Link',
})`
  align-items: center;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 900;
  padding: 20px;
  text-transform: uppercase;

  &:hover {
    background-color: #563F7A;
    color: #fff;
    cursor: pointer;
  }
`;

const DummyLink = styled.span.withConfig({
  displayName: 'DummyLink',
})`
  align-items: center;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 900;
  padding: 20px;
  text-transform: uppercase;

  &:hover {
    background-color: #563F7A;
    color: #fff;
    cursor: pointer;
  }
`;

const Header = () => (
  <Container>
    <Link to="home">Home</Link>
    <DummyLink>About</DummyLink>
    <Link to="calculator">Calculator</Link>
    <DummyLink>Contact</DummyLink>
  </Container>
);

export default Header;