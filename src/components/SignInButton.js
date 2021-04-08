import React from 'react';
import { useHistory } from 'react-router-dom';
import { loginProcess } from '../service';

function SignInButton({ isDisable, setWrongData, email, password }) {
  const history = useHistory();

  const validateUser = (data) => {
    if (data.message && data.message === 'Invalid datas') return setWrongData(true);
    localStorage.setItem('token', JSON.stringify(data.token));
    history.push('/home')
  }

  const clickButton = async () => {
    const body = { email, password };
    const response = await loginProcess('login', body);
    validateUser(response);
  }

  return (
    <button
      type="button"
      className="btn signin-button mb-0"
      onClick={ clickButton }
      disabled={ isDisable }
    >
      Sign in
    </button>
  )
}

export default SignInButton
