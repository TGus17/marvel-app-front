import React, { useEffect, useState, useContext } from 'react';
import { fetchCharactersOrComics, searchMavel } from '../service';
import { useHistory } from 'react-router-dom';
import { Card, SearchBar, LoadingSpinner, MenuSettings } from '../components';
import { isUserLogged } from '../util/exportedFunctions';
import AppContext from '../context/AppContext';
import Profile from '../images/profileIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import './styles/Home.css';

function Home() {
  // const [getResponse, setGetResponse] = useState(false);
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
    getResponse,
    setGetResponse,
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
      <MenuSettings />
      <div>
        {showSearchBar && <SearchBar searchCharacter={ searchCharacter }/>}
      </div>
      <div>
        <h2>{title}</h2>
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
