import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../util/verifications';
import { loginProcess } from '../service';
import Forms from '../components/Forms';
import './styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [wrongData, setWrongData] = useState(false);
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

  useEffect(() => {
    setIsDisable(!verifyEmailAndPassword(email, password));
    setWrongData(false);
  }, [email, password]);

  return (
    <div className="login-container">
      <Forms
        setEmail={setEmail}
        setPassword={setPassword}
      />
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
      <div>
        { wrongData && <span>Dados inválidos.</span> }
      </div>
    </div>
  );
}

export default Login;
