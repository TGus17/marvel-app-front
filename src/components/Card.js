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
      <div className="card">
        <div className="container-image">
          <img className="card-image" src={image} alt={ data.name ? data.name : data.title } />
        </div>
        <div className="container-title">
          <h3>{ data.name ? data.name : data.title }</h3>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
