import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { requestProcess } from '../service';
import AppContext from '../context/AppContext';

function ButtonComponent({ label, endpoint, method, body, redirect }) {
  const history = useHistory();
  const {
    setComebackData,
    isDisable,
    setMessageResponse,
  } = useContext(AppContext);

  // const redirectUser = (data) => {
  //   if (redirect === 'home') localStorage.setItem('token', JSON.stringify(data.token));
  //   return history.push(redirect)
  // }

  // const validateUser = (data) => {
  //   setComebackData(true);
  //   setMessageResponse(data.message);

  //   if (!data.err) {
  //     return redirectUser(data);
  //   }
  // }

  const clickButton = async () => {
    
    // const authorization = JSON.parse(localStorage.getItem('token')) ?
    // JSON.parse(localStorage.getItem('token')) : null;
    // const response = await requestProcess(endpoint, authorization, method, body);

    validateUser(response);
  }

  return (
    <button
      type="button"
      className="btn signin-button mb-0"
      onClick={ clickButton }
      disabled={ isDisable }
    >
      { label }
    </button>
  )
}

export default ButtonComponent;
