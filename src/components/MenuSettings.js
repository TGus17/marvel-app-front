import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import { MenuButton } from './';
import Hamburger_icon_black from '../images/icons/Hamburger_icon.png';
// import Hamburger_icon_white from '../images/icons/Hamburger_icon_white.png';
import './styles/MenuItem.css';

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
  <div className="menu-container">
    <input type="checkbox" id="check" />
    <label htmlFor="check">
      <img src={Hamburger_icon_black} alt="menu-icon" />
    </label>
    <nav>
      <ul>
        <li>
          <MenuButton
            onClick={ changeToComics }
            label="Comics"
          />
        </li>
        <li>
          <MenuButton
            onClick={ changeToCharacters }
            label="Characters"
          />
        </li>
        <li>
          <MenuButton
            onClick={ () => history.push('/profile') }
            label="Profile"
          />
        </li>
        <li>
          <MenuButton
            onClick={ () => history.push('/favorites') }
            label="Favorites"
          />
        </li>
        <li>
          <MenuButton
            onClick={ () => setShowSearchBar(!showSearchBar) }
            label="Search"
          />
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default MenuSettings
