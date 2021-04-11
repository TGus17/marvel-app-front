import React, { useEffect, useState, useContext } from 'react';
import { fetchCharactersOrComics } from '../service';
import { useHistory } from 'react-router-dom';
import { Card } from '../components';
import { isUserLogged } from '../util/exportedFunctions';
import AppContext from '../context/AppContext';
import './styles/Home.css';

function Home() {
  const [data, setData] = useState([]);
  const { setEmail, setName, showCharacters, setShowCharacters, showComics, setShowComics } = useContext(AppContext);
  const title = showCharacters ? 'Characters' : 'Comics';
  const history = useHistory();
  const changeToComics = () => {
    setShowCharacters(false);
    setShowComics(true);
  }

  const changeToCharacters = () => {
    setShowComics(false);
    setShowCharacters(true);
  }

  const showDatas = async () => {
    const allData = (
      showCharacters ?
      await fetchCharactersOrComics('characters') :
      await fetchCharactersOrComics('comics')
    );
    // console.log(allData.data.results);
    return setData(allData.data.results);
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
        Show settings
      </button>
      <button
        onClick={ () => history.push('/favorites') }
      >
        Show favorites
      </button>
      <div className="home-container">
        {data.map((data) => (
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
