import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { requestProcess, searchMavel } from '../service';
import AppContext from '../context/AppContext';
// import searchMavel from '../service/apiService';

function MarvelSearchButton({ searchCharacter, label }) {

  const {
    setData,
    data,
  } = useContext(AppContext);

  // const clickButton = async () => {
  //   const allData = await searchMavel(comicOrCharacter, searchParam);
  //   setData(allData.data.results);
  //   // console.log(allData.data.results);
  // }

  return (
    <button
      type="button"
      className="btn signin-button mb-0"
      onClick={ searchCharacter }
    >
      { label }
    </button>
  )
}

export default MarvelSearchButton;
