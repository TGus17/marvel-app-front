import React, { useEffect, useState } from 'react';
import { fetchCharactersOrComics } from '../service';
import Card from '../components/Card';
import './styles/Home.css';

function Home() {
  const [showCharacters, setShowCharacters] = useState(true);
  const [showComics, setShowComics] = useState(false);
  const [data, setData] = useState([]);
  const title = showCharacters ? 'Characters' : 'Comics';
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
    return setData(allData.data.results);
  }

  useEffect(() => {
    showDatas();
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
      <div className="home-container">
        {data.map((data) => (
          <Card
            data={data}
            showCharacters={showCharacters}
          />
          ))
        }
      </div>
    </div>
  )
}
export default Home;
