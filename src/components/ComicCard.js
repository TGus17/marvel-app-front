import React from 'react';
import PropTypes from 'prop-types';

const ComicCard = ({ name, image }) => {

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

ComicCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ComicCard;
