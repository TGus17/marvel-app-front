import React, { useContext, useEffect } from 'react';
import { ButtonComponent, Forms } from '../components';
import AppContext from '../context/AppContext';
import { verifyEmailAndPassword } from '../util/verifications';
import './styles/Login.css';

function Register() {
  const {
    setName,
    name,
    email,
    password,
    wrongData,
    setIsDisable,
    setWrongData,
    messageOfError,
  } = useContext(AppContext);

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    setWrongData(false);
  }, [email, password]);

  return (
    <div className="login-container">
      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label"
        >
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="name"
          onChange={ (e) => setName(e.target.value) }
        />
      </div>
      <Forms />
      <div className="col-auto buttons">
        <ButtonComponent
          body={ { name, email, password } }
          label='Sign Up'
          endpoint='register'
          redirect='/'
        />
      </div>
      <div>
        { wrongData && messageOfError }
      </div>
    </div>
  )
}

export default Register
