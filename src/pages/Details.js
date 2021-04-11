import { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../service';

function Details(props) {
  const [marvelData, setMarvelData] = useState({});
  const [downloaded, setDownloaded] = useState(false);
  const { location: { state: { uri } }, match: { params: { id } } } = props;
  

  const fetchData = async () => {
    const { data: { results: [fetchedResult] } } = await fetchMarvelData(uri);
    setMarvelData(fetchedResult);
    setDownloaded(true);
  };

  // const method = (objeto, id) => {
  //   if (objeto) {
  //     const deleteFavorite = favoriteCharacters.filter((item) => item.id !== id);
  //     localStorage.setItem('favoriteCharacters', JSON.stringify(deleteFavorite));
  //   }
  //   const includeFavorite = [...favoriteCharacters, { id, uri }]
  //   localStorage.setItem('favoriteCharacters', JSON.stringify(includeFavorite));
  // }

  const dealWithCharacter = (arrayObject) => {
    const containsFavorite = arrayObject.filter((item) => item.id === id);
    if (containsFavorite.length !== 0) {
      const deleteFavorite = arrayObject.filter((item) => item.id !== id);
      return localStorage.setItem('favoriteCharacters', JSON.stringify(deleteFavorite));
    }
    const includeFavorite = [...arrayObject, { id, uri }]
    return localStorage.setItem('favoriteCharacters', JSON.stringify(includeFavorite));
  }


  const markAndUnmarkAsFavorite = () => {
    const favoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters'));
    if (!favoriteCharacters || favoriteCharacters.length === 0) {
      return localStorage.setItem('favoriteCharacters', JSON.stringify([{ id, uri }]));
    }
    dealWithCharacter(favoriteCharacters);
    // const containsFavorite = favoriteCharacters.filter((item) => item.id === id);

    // if (containsFavorite.length !== 0) {
    //   const deleteFavorite = favoriteCharacters.filter((item) => item.id !== id);

    //   return localStorage.setItem('favoriteCharacters', JSON.stringify(deleteFavorite));
    // }
    // const includeFavorite = [...favoriteCharacters, { id, uri }]

    // return localStorage.setItem('favoriteCharacters', JSON.stringify(includeFavorite));

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <button onClick={ markAndUnmarkAsFavorite }>
          Mark as Favorite
        </button>
      </div>
      <h1>{marvelData.name}</h1>
      <p>{marvelData.description}</p>
      {downloaded &&
        <img src={`${marvelData.thumbnail.path}.${marvelData.thumbnail.extension}`} alt={marvelData.name}/>}
    </div>
  );
}

export default Details;
