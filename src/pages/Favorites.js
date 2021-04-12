import React from 'react';
import { useHistory } from 'react-router-dom';
import { DetailCard } from '../components';

function Favorites() {
  const favoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters'));
  const favoriteComics = JSON.parse(localStorage.getItem('favoriteComics'));
  const history = useHistory();

  return (
    <div>
      <div>
        <h1>Characters</h1>
        {
          favoriteCharacters && favoriteCharacters.length !== 0
            ?
            favoriteCharacters.map((item) => (
            <DetailCard
              item={item}
            />
          ))
          :
          <spam>There are no Favorite Characters</spam>
      }
      </div>
      <div>
        <h1>Comics</h1>
        {
          favoriteComics && favoriteComics.length !== 0
            ?
            favoriteComics.map((item) => (
                <DetailCard
                  item={item}
                />  
            ))
            :
            <spam>There are no Favorite Comics</spam>
        }
      </div>
      <div>
        <button
          type="button"
          className="btn signin-button mb-0"
          onClick={ () => history.push('/home') }
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Favorites
