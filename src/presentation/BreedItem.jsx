import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
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

  h3 {
    font-weight: lighter;
    margin: 0;
    margin-bottom: 4px;
    padding: 15px;
  }

  &:hover {
    box-shadow: inset 0px -4px 0px #563F7A;
  }
`;

const Img = styled.img.withConfig({
  displayName: 'Img',
})`
  width: 100%;
`;

const BreedItem = ({ img, name }) => {
  const link = `calculator/${name.split(' ').join('-').toLowerCase()}`;
  return (
    <Link to={link}>
      <Container>
        <Img src={img} alt={name} />
        <h3>{name}</h3>
      </Container>
    </Link>
  );
};

BreedItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BreedItem;
