import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div.withConfig({
  displayName: 'Container',
})`
  background-color: #fff;
  border: 1px solid rgba(86, 63, 122, 0.3);
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(86, 63, 122, 0.25);
  display: inline-block;
  margin: auto;
  max-width: 450px;
  min-width: 300px;

  &:hover {
    border: 1px solid rgba(86, 63, 122, 0.5);
    box-shadow: inset 0px -4px 0px #563F7A;
  }
`;

const Img = styled.img.withConfig({
  displayName: 'Img',
})`
  border-radius: 3px 3px 0 0;
  width: 100%;
`;

const Name = styled.h3.withConfig({
  displayName: 'Name',
})`
  font-weight: lighter;
  margin: 0;
  margin-bottom: 4px;
  padding: 15px;
`;

const BreedItem = ({ img, name }) => {
  const link = `calculator/${name.split(' ').join('-').toLowerCase()}`;
  return (
    <Link to={link}>
      <Container>
        <Img src={img} alt={name} />
        <Name>{name}</Name>
      </Container>
    </Link>
  );
};

BreedItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BreedItem;
