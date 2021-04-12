import React, { useEffect, useContext } from 'react';
import { fetchCharactersOrComics, searchMavel } from '../service';
import { useHistory } from 'react-router-dom';
import { Card, SearchBar, LoadingSpinner, MenuSettings } from '../components';
import { isUserLogged } from '../util/exportedFunctions';
import AppContext from '../context/AppContext';
import './styles/Home.css';

function Home() {
  const {
    data,
    setData,
    setEmail,
    setName,
    showCharacters,
    showComics,
    showSearchBar,
    setCopyrightText,
    inputSearch,
    getResponse,
    setGetResponse,
  } = useContext(AppContext);
  const title = showCharacters ? 'Characters' : 'Comics';
  const history = useHistory();

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
