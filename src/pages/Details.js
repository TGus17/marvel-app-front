import React, { useEffect, useState, useContext } from 'react';
import { fetchMarvelData } from '../service';
import { DetailCard, LoadingSpinner } from '../components';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import AppContext from '../context/AppContext';

function Details(props) {
  const { copyrightText } = useContext(AppContext);
  const [marvelData, setMarvelData] = useState({});
  const [downloaded, setDownloaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { location: { state: { data } }, match: { params: { id } } } = props;
  const { resourceURI } = data;

  const fetchData = async () => {
    const { data: { results: [fetchedResult] } } = await fetchMarvelData(resourceURI);
    setMarvelData(fetchedResult);
    setDownloaded(true);
  };

  const checkFavorites = () => {
    const key = data.name ? 'favoriteCharacters' : 'favoriteComics';
    const favoriteData = JSON.parse(localStorage.getItem(key));
    if (favoriteData && favoriteData.length !== 0) {
      const itIsFavorite = favoriteData.filter((item) => item.id === id);
      if (itIsFavorite.length > 0) return setIsFavorite(true);
    }
    return setIsFavorite(false);
  }

  const dealWithStorage = (arrayObject, key) => {
    const containsFavorite = arrayObject.filter((item) => item.id === id);
    if (containsFavorite.length !== 0) {
      const deleteFavorite = arrayObject.filter((item) => item.id !== id);
      return localStorage.setItem(key, JSON.stringify(deleteFavorite));
    }
    const includeFavorite = [...arrayObject, { id, resourceURI }]
    return localStorage.setItem(key, JSON.stringify(includeFavorite));
  }


  const markAndUnmarkAsFavorite = () => {
    const key = data.name ? 'favoriteCharacters' : 'favoriteComics';
    const favoriteCharacters = JSON.parse(localStorage.getItem(key));
    if (!favoriteCharacters || favoriteCharacters.length === 0) {
      setIsFavorite(true);
      return localStorage.setItem(key, JSON.stringify([{ id, resourceURI }]));
    }
    dealWithStorage(favoriteCharacters, key);
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    fetchData();
    checkFavorites();
  }, [id]);

  return (
    <div>
      <div>
        <button onClick={ markAndUnmarkAsFavorite }>
          <img src={ isFavorite ? blackHeartIcon : whiteHeart } alt='favorite' />
        </button>
      </div>
      <div>
        <h1>{ data.name ? marvelData.name : marvelData.title }</h1>
        <p>{ marvelData.description }</p>
      </div>
      <div>
        {!downloaded
          ?
          <LoadingSpinner />
          :
          (
          <div>
            <div>
              <img src={`${marvelData.thumbnail.path}.${marvelData.thumbnail.extension}`} alt={marvelData.name}/>
              <p className="copyright">{copyrightText}</p>
            </div>
            <div>
              <h3>{data.name ? 'Related Comics' : 'Related Characters'}</h3>
              {
                data.name
                  ?
                  data.comics.items.map((item) => (
                    <DetailCard
                      item={item}
                    />
                  ))
                  :
                  data.characters.items.map((item) => (
                    <DetailCard
                      item={item}
                    />
                  ))
              }
            </div>
          </div>
          )}
      </div>
    </div>
  );
}

export default Details;
