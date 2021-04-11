import React from 'react';
// import { fetchMarvelData } from '../service/apiService';
import {DetailCard} from '../components';

function Favorites() {
  const favoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters'));
  const favoriteComics = JSON.parse(localStorage.getItem('favoriteComics'));
  // console.log('characters', favoriteCharacters);
  // console.log('comics', favoriteComics);

  // const returnData = async (data) => {
  //   const back = await fetchMarvelData(data.uri);
  //   console.log(back.data.results[0].name);
  //   return (
  //     <div>
  //       <h1>{back.data.results[0].name}</h1>
  //     </div>
  //   );
  // };

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
          <spam>Não há characters favoritos</spam>
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
            <spam>Não há comics favoritos</spam>
        }
      </div>
    </div>
  )
}

export default Favorites
