import React, { useEffect, useState } from 'react';
import { fetchCharactersOrComics } from '../service';
import Card from '../components/Card';
import './styles/Home.css';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [showCharacters, setShowCharacters] = useState(true);
  const [showComics, setShowComics] = useState(false);

  const fetchCharacters = async () => {
    const allCharacters = await fetchCharactersOrComics('characters');
    setCharacters(allCharacters.data.results);
  }

  const fetchComics = async () => {
    const allComics = await fetchCharactersOrComics('comics');
    setComics(allComics.data.results);
  }

  const changeComics = () => {
    fetchComics();
    setShowCharacters(false);
    setShowComics(true);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <button
        onClick={ changeComics }
      >
        Show Comics
      </button>
      <div className="home-container">
        {showCharacters && characters.map(({
          resourceURI,
          name,
          thumbnail: { extension, path },
          comics,
          series,
          stories,
          events,
          urls,
        }) => (
          <Card
            name={name}
            image={`${path}.${extension}`}
            uri={ resourceURI }
            comics={ comics }
            series={ series }
            stories={ stories }
            events={ events }
            urls={ urls }
          />
          ))
        }
        {showComics && comics.map(({
          resourceURI,
          title: name,
          thumbnail: { extension, path },
          characters: comics,
          series,
          stories,
          events,
          urls,
        }) => (
          <Card
            name={name}
            image={`${path}.${extension}`}
            uri={ resourceURI }
            comics={ comics }
            series={ series }
            stories={ stories }
            events={ events }
            urls={ urls }
          />
          ))
        }
      </div>
    </div>
  )
}
export default Home;
