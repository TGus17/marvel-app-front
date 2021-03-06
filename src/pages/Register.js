import React, { useContext, useEffect } from 'react';
import { ButtonComponent, Form, MenuButton, MenuSettings } from '../components';
import AppContext from '../context/AppContext';
import { verifyEmailAndPassword } from '../util/exportedFunctions';
import { useHistory } from 'react-router-dom';
import './styles/Login.css';
import './styles/Register.css';

function Register() {
  const {
    name,
    email,
    password,
    comebackData,
    setIsDisable,
    setComebackData,
    messageResponse,
    randomIconPage,
  } = useContext(AppContext);
  const history = useHistory();

  const onClick = () => {
    setComebackData(false);
    history.push('/'); 
  } ;

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    setComebackData(false);
  }, [email, password]);

  return (
    <div>
      <MenuSettings />
      <div className="login register">
        <img
          src={ randomIconPage() }
          className="image-user"
          width="100"
          height="100"
          alt="login"
        />
        <h1>Register</h1>
        <Form showName={true} />
        <ButtonComponent
          body={ { name, email, password } }
          label='Sign Up'
          endpoint='register'
          redirect='/'
          method="POST"
        />
        <MenuButton
          onClick={ onClick }
          label="Cancel"
        />
        <div>
          { comebackData && messageResponse }
        </div>
      </div>
    </div>
  );
};

export default Register;
