import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/ComicCard.css';
import { fetchMarvelData } from '../service';

const Card = ({ data, showCharacters }) => {
  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  const name = showCharacters ? data.name : data.title;
  const uri = data.resourceURI;
  console.log('data', data.id);
  // const history = useHistory();
  
  const clickPicture = async () => {
    // const dataComeback = await fetchMarvelData(uri);
    // const [response] = dataComeback.data.results;
    // console.log('response', response);
    // console.log(data);
    // const [{ id }] = data.data.results;
    // console.log('id', id);
  }

  return (
    <Link
      to={ { pathname:`/details/${data.id}`, state: { uri } } }
    >
      <div
        className="card-container"
        onClick={ clickPicture }
      >
        <img src={image} alt={name} className="card-container"/>
        <p className="title">{name}</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
