import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../util/verifications';
import fetchApi from '../service/apiService';
import './styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true)
  const history = useHistory();

  const clickButton = () => {
    fetchApi()
      .then(response => console.log(response));
    history.push('/home')
  }

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password))
  }, [email, password]);

  return (
    <div className="login-container">
      <form
        className="row g-3"
      >
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password with at least 6 characters"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <div className="col-auto buttons">
          <button
            type="button"
            className="btn signin-button mb-0"
            onClick={ clickButton }
            disabled={ isDisable }
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn mb-0 register-button"
            onClick={ () => history.push('/register') }
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
