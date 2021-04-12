import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { requestProcess, searchMavel } from '../service';
// import AppContext from '../context/AppContext';
// import searchMavel from '../service/apiService';

function MarvelSearchButton({ label, comicOrCharacter, nameOrTitle, searchParam }) {
  // label, endpoint, method, body, redirect
  // const history = useHistory();
  // const {
  //   // setComebackData,
  //   isDisable,
  //   // setMessageResponse,
  //   setData,
  // } = useContext(AppContext);

  const clickButton = async () => {
    const allData = await searchMavel(comicOrCharacter, searchParam);
    console.log(allData);
  }

  return (
    <button
      type="button"
      className="btn signin-button mb-0"
      onClick={ clickButton }
    >
      { label }
    </button>
  )
}

export default MarvelSearchButton;
