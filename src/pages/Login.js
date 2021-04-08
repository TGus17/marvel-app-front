import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../util/verifications';
import { Forms, SignInButton } from '../components';
import './styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [wrongData, setWrongData] = useState(false);
  const history = useHistory();

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
        <SignInButton
          isDisable={ isDisable }
          setWrongData={setWrongData}
          email={email}
          password={password}
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
        { wrongData && <span>Dados inválidos.</span> }
      </div>
    </div>
  );
}

export default Login;
