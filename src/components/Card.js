import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/ComicCard.css';

function Card ({ data }) {
  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  const uri = data.resourceURI;

  return (
    <Link
      className="link-card"
      to={ { pathname:`/details/${data.id}`, state: { uri, data } } }
    >
      <div className="card-container">
        <img className="card-image" src={image} alt={ data.name ? data.name : data.title } />
        <p className="title">{ data.name ? data.name : data.title }</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
