import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import PropTypes from 'prop-types';
import './styles/ComicCard.css';

const Card = ({ data }) => {
  const { showCharacters } = useContext(AppContext);
  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  const uri = data.resourceURI;

  return (
    <Link
      to={ { pathname:`/details/${data.id}`, state: { uri } } }
    >
      <div
        className="card-container"
      >
        <img src={image} alt={ showCharacters ? data.name : data.title } className="card-container"/>
        <p className="title">{ showCharacters ? data.name : data.title }</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
