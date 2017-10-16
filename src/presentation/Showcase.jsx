import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.section.withConfig({
  displayName: 'Container',
})`
  background-color: #eeebf4;
  border-radius: 1px;
  box-shadow: 1px 1px 3px rgba(86, 63, 122, 0.25);
  color: #322547;
  font-family: verdana;
  font-size: 12px;
  line-height: 1.5;
  padding: 25px 20px;
  position: relative;
  text-align: justify;
  min-width: 300px;
  max-width: 450px;
`;

const Button = styled.button.withConfig({
  displayName: 'Button',
})`
  background-color: #563f7a;
  border: none;
  border-radius: 50%;
  bottom: 0;
  color: #fff;
  left: 50%;
  outline: none;
  position: absolute;
  transform: translate(-50%, 50%);

  & i {
    margin: 1px -2px -1px 2px;
    padding: 1px;
  }
`;

const Showcase = ({ children, link }) => (
  <Container>
    { children }
    { link ? (
      <Button type="button">
        <i className="fa fa-chevron-right fa-2x" />
      </Button>
    ) : undefined }
  </Container>
);

Showcase.defaultProps = {
  link: null,
};

Showcase.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired,
  link: PropTypes.string,
};

export default Showcase;
