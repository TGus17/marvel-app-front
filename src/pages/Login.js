import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../util/verifications';
import { Forms, ButtonComponent } from '../components';
import AppContext from '../context/AppContext';
import './styles/Login.css';

function Login() {
  const {
    email,
    password,
    wrongData,
    setWrongData,
    setIsDisable,
    messageOfError,
  } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    setWrongData(false);
  }, [email, password]);

  return (
    <div className="login-container">
      <Forms />
      <div className="col-auto buttons">
        <ButtonComponent
          body={ { email, password } }
          label='Sign In'
          endpoint='login'
        />
        <button
          type="button"
          className="btn mb-0 register-button"
          onClick={ () => history.push('/register') }
        >
          Register
        </button>
      </div>
      <div>
        { wrongData && messageOfError }
      </div>
    </div>
  );
}

export default Login;
