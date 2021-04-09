import React, { useEffect, useContext } from 'react';
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
    userRegistered,
    setUserRegistered,
  } = useContext(AppContext);
  const history = useHistory();

  const verifyIfNewUser = () => {
    if (userRegistered) return setUserRegistered(true);
    return setUserRegistered(false);
  }

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    setWrongData(false);
    setUserRegistered(false);
  }, [email, password]);

  useEffect(() => {
    verifyIfNewUser();
  }, []);

  return (
    <div className="login-container">
      <Forms />
      <div className="col-auto buttons">
        <ButtonComponent
          body={ { email, password } }
          label='Sign In'
          endpoint='login'
          redirect='home'
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
        { userRegistered && 'User Registered! Please log in.' }
      </div>
    </div>
  );
}

export default Login;
