import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../util/verifications';
import { Form, ButtonComponent } from '../components';
// import Form2 from '../components/Form';
import AppContext from '../context/AppContext';
import './styles/Login.css';

function Login() {
  const {
    email,
    password,
    comebackData,
    setComebackData,
    setIsDisable,
    messageResponse,
  } = useContext(AppContext);
  const history = useHistory();

  const verifyIfNewUser = () => {
    if (comebackData) return setComebackData(true);
    return setComebackData(false);
  }

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    setComebackData(false);
    // setUserRegistered(false);
  }, [email, password]);

  useEffect(() => {
    verifyIfNewUser();
  }, []);

  return (
    <div className="login-container">
      <Form showName={false} />
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
        { comebackData && messageResponse }
      </div>
    </div>
  );
}

export default Login;
