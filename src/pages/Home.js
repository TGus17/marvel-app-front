import React, { useEffect, useState } from 'react';
import { fetchCharactersOrComics } from '../service';
import Card from '../components/Card';
import './styles/Home.css';

function Home() {
  const [showCharacters, setShowCharacters] = useState(true);
  const [showComics, setShowComics] = useState(false);
  const [data, setData] = useState([]);

  const changeComics = () => {
    setShowCharacters(false);
    setShowComics(true);
  }

  const showDatas = async () => {
    const allData = (showCharacters ? await fetchCharactersOrComics('characters') : await fetchCharactersOrComics('comics'));
    return setData(allData.data.results);
  }

  useEffect(() => {
    showDatas();
  }, [showComics, showCharacters]);

  return (
    <div>
      <button
        onClick={ changeComics }
      >
        Show Comics
      </button>
      <div className="home-container">
        {data.map((data)
          // resourceURI,
          // name,
          // thumbnail: { extension, path },
          // comics,
          // series,
          // stories,
          // events,
          // urls,
        ) => (
          // <Card
          //   name={name}
          //   image={`${path}.${extension}`}
          //   uri={ resourceURI }
          //   comics={ comics }
          //   series={ series }
          //   stories={ stories }
          //   events={ events }
          //   urls={ urls }
          //   character={ showCharacters }
          // />
          <Card

          />
          ))
        }
      </div>
    </div>
  )
}
export default Home;
