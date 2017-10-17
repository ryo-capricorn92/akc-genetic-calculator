import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  border: 1px solid gray;
  border-radius: 3px;
  display: inline-block;
  margin: auto;
  max-width: 450px;
  min-width: 300px;
`;

const Img = styled.img.withConfig({
  displayName: 'Img',
})`
  width: 100%;
`;

const BreedItem = ({ img, name }) => (
  <Container>
    <Img src={img} alt={name} />
    <h3>{name}</h3>
  </Container>
);

BreedItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BreedItem;
