import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../util/exportedFunctions';
import { Form, ButtonComponent, MenuButton } from '../components';
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
    randomIconPage,
  } = useContext(AppContext);
  const history = useHistory();

  const verifyIfNewUser = () => {
    if (comebackData) return setComebackData(true);
    return setComebackData(false);
  }

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    console.log(comebackData);
    setComebackData(false);
    verifyIfNewUser();
  }, [email, password]);

  return (
    <div className="login">
      <img
        src={ randomIconPage() }
        className="image-user"
        width="100"
        height="100"
        alt="login"
      />
      <h1>Login</h1>
      <Form showName={false} />
      <ButtonComponent
        body={ { email, password } }
        label='Sign In'
        endpoint='login'
        redirect='home'
        method="POST"
      />
      <MenuButton
        onClick={ () => history.push('/register') }
        label="Register"
        />
      <div>
        { comebackData && <p>{ messageResponse }</p> }
      </div>
    </div>
  );
};

export default Login;
