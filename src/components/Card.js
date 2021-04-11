import React from 'react';
import PropTypes from 'prop-types';
import './styles/ComicCard.css';
import { fetchMarvelData } from '../service';

const Card = ({ data, showCharacters }) => {
  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  const name = showCharacters ? data.name : data.title;
  const uri = data.resourceURI;

  const clickPicture = async () => {
    const data = await fetchMarvelData(uri);
    console.log(data);
  }

  return (
    <div
      className="card-container"
      onClick={ clickPicture }
    >
      <img src={image} alt={name} className="card-container"/>
      <p className="title">{name}</p>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
