import React, { useEffect, useState, useContext } from 'react';
import { fetchMarvelData } from '../service';
import AppContext from '../context/AppContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

function Details(props) {
  const { showCharacters } = useContext(AppContext);
  const [marvelData, setMarvelData] = useState({});
  const [downloaded, setDownloaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { location: { state: { uri } }, match: { params: { id } } } = props;
  

  const fetchData = async () => {
    const { data: { results: [fetchedResult] } } = await fetchMarvelData(uri);
    setMarvelData(fetchedResult);
    // setDownloaded funcionou para não quebrar a renderização
    setDownloaded(true);
  };

  const checkFavorites = () => {
    const key = showCharacters ? 'favoriteCharacters' : 'favoriteComics';
    const favoriteData = JSON.parse(localStorage.getItem(key));
    if (favoriteData || favoriteData.length !== 0) {
      const itIsFavorite = favoriteData.filter((item) => item.id === id);
      if (itIsFavorite.length > 0) setIsFavorite(true);
    }
  }

  const dealWithStorage = (arrayObject, key) => {
    const containsFavorite = arrayObject.filter((item) => item.id === id);
    if (containsFavorite.length !== 0) {
      const deleteFavorite = arrayObject.filter((item) => item.id !== id);
      return localStorage.setItem(key, JSON.stringify(deleteFavorite));
    }
    const includeFavorite = [...arrayObject, { id, uri }]
    return localStorage.setItem(key, JSON.stringify(includeFavorite));
  }


  const markAndUnmarkAsFavorite = () => {
    const key = showCharacters ? 'favoriteCharacters' : 'favoriteComics';
    const favoriteCharacters = JSON.parse(localStorage.getItem(key));
    if (!favoriteCharacters || favoriteCharacters.length === 0) {
      return localStorage.setItem(key, JSON.stringify([{ id, uri }]));
    }
    dealWithStorage(favoriteCharacters, key);
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    fetchData();
    checkFavorites();
  }, []);

  return (
    <div>
      <div>
        <button onClick={ markAndUnmarkAsFavorite }>
          <img src={ isFavorite ? blackHeartIcon : whiteHeart } alt='favorite' />
        </button>
      </div>
      <h1>{showCharacters ? marvelData.name : marvelData.title}</h1>
      <p>{marvelData.description}</p>
      {/* const downloaded é para renderizar apenas se a resposta da api já tiver retornado */}
      {downloaded &&
        <img src={`${marvelData.thumbnail.path}.${marvelData.thumbnail.extension}`} alt={marvelData.name}/>}
    </div>
  );
}

export default Details;
