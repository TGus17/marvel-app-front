import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { requestProcess } from '../service';
import AppContext from '../context/AppContext';

function ButtonComponent({ body, label, endpoint }) {
  const history = useHistory();
  const { setWrongData, isDisable, setMessageOfError } = useContext(AppContext);

  const validateUser = (data) => {
    if (data.message) {
      setWrongData(true);
      return setMessageOfError(data.message);
    }
    localStorage.setItem('token', JSON.stringify(data.token));
    history.push('/home')
  }

  const clickButton = async () => {
    console.log('endpoitn', endpoint);
    const response = await requestProcess(endpoint, body);
    console.log(response);
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
