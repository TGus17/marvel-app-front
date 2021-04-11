import React, { useEffect, useState, useContext } from 'react';
import { fetchMarvelData } from '../service';
// import AppContext from '../context/AppContext';
import { DetailCard } from '../components';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

function Details(props) {
  // const { showCharacters } = useContext(AppContext);
  const [marvelData, setMarvelData] = useState({});
  const [downloaded, setDownloaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { location: { state: { data } }, match: { params: { id } } } = props;
  // const uri = data.resourceURI;
  const { resourceURI } = data;
  // const literalName = data.name ? 'comics' : 'characters';
  // const literalTitle = data.name ? 'title' : 'name';
  // const variable = `${data[literalName].items}`;
  // console.log('variavel1', data.characters.items);
  // console.log('variavel2', JSON.stringify(variable));
  // console.log('name', literalName);
  // console.log('title', literalTitle);
  // const print = `${data}`;
  // console.log('state.data', `${data[literalName].items[0][literalTitle]}`);
  // console.log('state.data', data.comics.items[0], literal);
  

  const fetchData = async () => {
    const { data: { results: [fetchedResult] } } = await fetchMarvelData(resourceURI);
    setMarvelData(fetchedResult);
    // setDownloaded funcionou para não quebrar a renderização
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
  }, []);

  return (
    <div>
      <div>
        <button onClick={ markAndUnmarkAsFavorite }>
          <img src={ isFavorite ? blackHeartIcon : whiteHeart } alt='favorite' />
        </button>
      </div>
      <div>
        <h1>{data.name ? marvelData.name : marvelData.title}</h1>
        <p>{marvelData.description}</p>
        {/* const downloaded é para renderizar apenas se a resposta da api já tiver retornado */}
        {downloaded &&
          <img src={`${marvelData.thumbnail.path}.${marvelData.thumbnail.extension}`} alt={marvelData.name}/>}
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
              // <h4>{item.name}</h4>
            ))
            :
            data.characters.items.map((item) => (
              <DetailCard
                item={item}
              />
              // <h4>{item.name}</h4>
            ))
        }
        {/* {variable.map((item) => (
          <div>
          </div>
        ))} */}
        {/* <h4>{`${data[literalName].items[0][literalTitle]}`}</h4> */}
      </div>
    </div>
  );
}

export default Details;
