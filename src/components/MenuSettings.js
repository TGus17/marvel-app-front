import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import {MenuButton} from './';

function MenuSettings() {
  const {
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

  return (
    <div>
      <MenuButton
        onClick={ changeToComics }
        label="Comics"
      />
      <MenuButton
        onClick={ changeToCharacters }
        label="Characters"
      />
      <MenuButton
        onClick={ () => history.push('/profile') }
        label="Profile"
      />
      <MenuButton
        onClick={ () => history.push('/favorites') }
        label="Favorites"
      />
      <MenuButton
        onClick={ () => setShowSearchBar(!showSearchBar) }
        label="Search"
      />
    </div>
  )
}

export default MenuSettings
