import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
// import searchMavel from '../service/apiService';
import { MarvelSearchButton } from '../components';

function SearchBar({ searchCharacter }) {
  const { showCharacters, setInputSearch } = useContext(AppContext);
  // const [inputSearch, setInputSearch] = useState('');
  const placeHolder = showCharacters ? 'Type Character' : 'Type Comic';
  // const param = showCharacters ? 'characters' : 'comics';
  // const name = showCharacters ? 'name' : 'title';
  console.log(searchCharacter);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={ placeHolder }
          onChange={ (e) => setInputSearch(e.target.value) }
        />
        <MarvelSearchButton
          label="Search"
          // comicOrCharacter={param}
          // nameOrTitle={name}
          // searchParam={inputSearch}
          searchCharacter={searchCharacter}
        />
    </div>
    </div>
  )
}

export default SearchBar
