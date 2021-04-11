import React, { useContext, useEffect } from 'react';
import { ButtonComponent, Form } from '../components';
import AppContext from '../context/AppContext';
import { verifyEmailAndPassword } from '../util/verifications';
import './styles/Login.css';

function Register() {
  const {
    name,
    email,
    password,
    comebackData,
    setIsDisable,
    setComebackData,
    messageResponse,
  } = useContext(AppContext);

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    setComebackData(false);
  }, [email, password]);

  return (
    <div className="login-container">
      <Form
        showName={true}
      />
      <div className="col-auto buttons">
        <ButtonComponent
          body={ { name, email, password } }
          label='Sign Up'
          endpoint='register'
          redirect='/'
          method="POST"
        />
      </div>
      <div>
        { comebackData && messageResponse }
      </div>
    </div>
  )
}

export default Register
