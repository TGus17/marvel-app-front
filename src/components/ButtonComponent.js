import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { requestProcess } from '../service';
import AppContext from '../context/AppContext';

function ButtonComponent({ body, label, endpoint, redirect }) {
  const history = useHistory();
  const {
    setWrongData,
    isDisable,
    setMessageOfError,
    setUserRegistered,
  } = useContext(AppContext);

  const redirectUser = (data) => {
    if (redirect === 'home') localStorage.setItem('token', JSON.stringify(data.token));
    setUserRegistered(true);
    return history.push(redirect)
  }

  const validateUser = (data) => {
    if (data.message) {
      setWrongData(true);
      return setMessageOfError(data.message);
    }
    redirectUser(data);
  }

  const clickButton = async () => {
    const response = await requestProcess(endpoint, null, 'POST', body);
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
