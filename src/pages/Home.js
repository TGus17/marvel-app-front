import React, { useEffect, useState, useContext } from 'react';
import { fetchCharactersOrComics, searchMavel } from '../service';
import { useHistory } from 'react-router-dom';
import { Card, SearchBar, LoadingSpinner } from '../components';
import { isUserLogged } from '../util/exportedFunctions';
import AppContext from '../context/AppContext';
import Profile from '../images/profileIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import './styles/Home.css';

function Home() {
  const [getResponse, setGetResponse] = useState(false);
  const {
    data,
    setData,
    setEmail,
    setName,
    showCharacters,
    setShowCharacters,
    showComics,
    setShowComics,
    showSearchBar,
    setShowSearchBar,
    // copyrightText,
    setCopyrightText,
    inputSearch,
  } = useContext(AppContext);
  const title = showCharacters ? 'Characters' : 'Comics';
  const history = useHistory();
  const changeToComics = () => {
    setGetResponse(false);
    setShowCharacters(false);
    setShowComics(true);
  }

  const changeToCharacters = () => {
    setGetResponse(false);
    setShowComics(false);
    setShowCharacters(true);
  }

  const showDatas = async () => {
    const allData = (
      showCharacters ?
      await fetchCharactersOrComics('characters') :
      await fetchCharactersOrComics('comics')
    );
    setData(allData.data.results);
    setCopyrightText(allData.attributionText);
    return setGetResponse(true);
  }

  const searchCharacter = async () => {
    const comicOrCharacter = showCharacters ? 'characters' : 'comics';
    const nameOrTitle = showCharacters ? 'name' : 'title';
    const allData = await searchMavel(comicOrCharacter, nameOrTitle, inputSearch);
    setData(allData.data.results);
    console.log(allData.data.results);
  }

  useEffect(() => {
    showDatas();
    isUserLogged(history, setEmail, setName)
  }, [showComics, showCharacters]);

  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <button
        onClick={ changeToComics }
      >
        Show Comics
      </button>
      <button
        onClick={ changeToCharacters }
      >
        Show Characters
      </button>
      <button
        onClick={ () => history.push('/profile') }
      >
        <img src={ Profile } alt='Profile' />
      </button>
      <button
        onClick={ () => history.push('/favorites') }
      >
        <img src={ WhiteHeart } alt='Profile' />
        Show favorites
      </button>
      <div>
        <button
          onClick={ () => setShowSearchBar(!showSearchBar) }>
          <img src={ SearchIcon } alt='search' />
        </button>
      </div>
      <div>
        {showSearchBar && <SearchBar searchCharacter={ searchCharacter }/>}
      </div>
      <div className="home-container">
        {!getResponse
          ?
          <LoadingSpinner />
          :
          data.map((data) => (
            <Card
              data={data}
            />
          ))
        }
      </div>
    </div>
  )
}
export default Home;
