import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { showCharacters } = useContext(AppContext);
  const placeHolder = showCharacters ? 'Type Character' : 'Type Comic';
  return (
    <div>
      <input
        type="text"
        placeholder={ placeHolder }
      />
    </div>
  )
}

export default SearchBar
