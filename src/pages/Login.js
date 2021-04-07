import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles/Login.css';

function Login() {
  const history = useHistory();

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
            placeholder="Password"
          />
        </div>
        <div className="col-auto buttons">
          <button
            type="button"
            className="btn signin-button mb-3"
            onClick={ () => history.push('/home') }
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn mb-3 register-button"
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
