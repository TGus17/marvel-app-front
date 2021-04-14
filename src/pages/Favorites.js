import React from 'react';
import { useHistory } from 'react-router-dom';
import { DetailCard, MenuButton, MenuSettings } from '../components';
import './styles/Favorite.css';

function Favorites() {
  const favoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters'));
  const favoriteComics = JSON.parse(localStorage.getItem('favoriteComics'));
  const history = useHistory();

  return (
    <div class="favorite-container">
      <div className="top-menu">
        <MenuSettings />
        <div className="selected">
          <MenuButton
            onClick={ () => history.push('/home') }
            label="Back to Home"
          />
        </div>
      </div>
      <div>
        <h1>Characters</h1>
        {
          favoriteCharacters && favoriteCharacters.length !== 0
            ?
            <div className="favorite-card">
              {favoriteCharacters.map((item) => (
              <DetailCard
                item={item}
              />
            ))}
          </div>
          :
          <spam>There are no Favorite Characters</spam>
      }
      </div>
      <div>
        <h1>Comics</h1>
        {
          favoriteComics && favoriteComics.length !== 0
            ?
            <div className="favorite-card">
              {favoriteComics.map((item) => (
                  <DetailCard
                    item={item}
                  />  
              ))}
            </div>
            :
            <spam>There are no Favorite Comics</spam>
        }
      </div>
    </div>
  )
}

export default Favorites
