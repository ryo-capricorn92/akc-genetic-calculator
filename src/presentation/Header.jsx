import React from 'react';
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

const NavLink = styled.div.withConfig({
  displayName: 'NavLink',
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
    <NavLink>Home</NavLink>
    <NavLink>Calculator</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Contact</NavLink>
  </Container>
);

export default Header;