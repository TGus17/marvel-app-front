import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
// import searchMavel from '../service/apiService';
import { MarvelSearchButton } from '../components';

function SearchBar() {
  const { showCharacters } = useContext(AppContext);
  const [inputSearch, setInputSearch] = useState('');
  const placeHolder = showCharacters ? 'Type Character' : 'Type Comic';
  const param = showCharacters ? 'characters' : 'comics';
  const name = showCharacters ? 'name' : 'title';

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={ placeHolder }
          onChange={ (e) => setInputSearch(e.target.value) }
        />
        <div>
          <MarvelSearchButton
            label="Search"
            comicOrCharacter={param}
            nameOrTitle={name}
            searchParam={inputSearch}
          />
        </div>
    </div>
    </div>
  )
}

export default SearchBar
