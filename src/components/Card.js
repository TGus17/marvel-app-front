import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/ComicCard.css';

const Card = ({ data }) => {
  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  const uri = data.resourceURI;
  console.log('dataCard', data);

  return (
    <Link
      to={ { pathname:`/details/${data.id}`, state: { uri, data } } }
    >
      <div
        className="card-container"
      >
        <img src={image} alt={ data.name ? data.name : data.title } className="card-container"/>
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
