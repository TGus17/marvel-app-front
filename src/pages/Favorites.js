import React from 'react';
import { useHistory } from 'react-router-dom';
import { DetailCard, MenuButton } from '../components';

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
        <MenuButton
          onClick={ () => history.push('/home') }
          label="Back to Home"
        />
      </div>
    </div>
  )
}

export default Favorites
