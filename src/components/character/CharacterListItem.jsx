import React from 'react';
import PropTypes from 'prop-types';

const CharacterListItem = ({ image, name }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

CharacterListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharacterListItem;
