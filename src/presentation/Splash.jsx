import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  padding: 0 15%;
  position: relative;
`;

const Img = styled.div.withConfig({
  displayName: 'Img',
})`
  background: #fff url('../img/home.jpg') no-repeat center;
  background-size: cover;
  height: 400px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

const Overlay = styled.div.withConfig({
  displayName: 'Overlay',
})`
  background: #000;
  height: 400px;
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 100vw;
`;

const Text = styled.span.withConfig({
  displayName: 'Text',
})`
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.5;
  position: relative;
  text-align: center;
  text-transform: uppercase;
`;

const Splash = ({ children }) => (
  <Container>
    <Img />
    <Overlay />
    <Text>{ children }</Text>
  </Container>
);

Splash.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired,
};

export default Splash;
