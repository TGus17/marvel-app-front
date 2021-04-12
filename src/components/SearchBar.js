import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { MarvelSearchButton } from '../components';

function SearchBar({ searchCharacter }) {
  const { showCharacters, setInputSearch } = useContext(AppContext);
  const placeHolder = showCharacters ? 'Type Character' : 'Type Comic';

  return (
    <div>
      <input
        type="text"
        placeholder={ placeHolder }
        onChange={ (e) => setInputSearch(e.target.value) }
      />
      <MarvelSearchButton
        label="Search"
        searchCharacter={searchCharacter}
      />
    </div>
  )
}

export default SearchBar
