import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import Profile from '../images/profileIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

function MenuSettings() {
  const {
    // showCharacters,
    setShowComics,
    setShowCharacters,
    setGetResponse,
    setShowSearchBar,
    showSearchBar,
  } = useContext(AppContext);
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
  // const title = showCharacters ? 'Characters' : 'Comics';
  return (
    <div>
      <button
        onClick={ changeToComics }
        className="btn signin-button mb-0"
      >
        Comics
      </button>
      <button
        onClick={ changeToCharacters }
        className="btn signin-button mb-0"
      >
        Characters
      </button>
      <button
        onClick={ () => history.push('/profile') }
        className="btn signin-button mb-0"
      >
        Profile
      </button>
      <button
        onClick={ () => history.push('/favorites') }
        className="btn signin-button mb-0"
      >
        Favorites
      </button>
      <button
        onClick={ () => setShowSearchBar(!showSearchBar) }
        className="btn signin-button mb-0"
      >
        Search
      </button>
    </div>
  )
}

export default MenuSettings
