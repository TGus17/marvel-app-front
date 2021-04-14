import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import '../pages/styles/Login.css';

function Form({ showName }) {
  const {
    email,
    setEmail,
    setPassword,
    name,
    setName,
    messageResponse,
    eraseDataFromState
  } = useContext(AppContext);

  const [autoFocus, setAutoFocus] = useState(true);
  const verifyIfUserIsDeletedOrDisconnected = () => {
    // A recuperação dessa chave é no caso do usuário ter sido deslogado
    const token = localStorage.getItem('token');
    if (messageResponse === 'User has been deleted.' || !token) {
      eraseDataFromState();
      // Esse removeItem é no caso do usuário ter sido deletado
      localStorage.removeItem('token');
    }
  }

  const checkAutoFocus = () => {
    if (showName === true) return setAutoFocus(true);
    setAutoFocus(false);
    console.log(autoFocus);
  }

  useEffect(() => {
    verifyIfUserIsDeletedOrDisconnected();
    checkAutoFocus();
  }, []);

  return (
    <form>
      {showName && <div className="mb-3">
        <label
          htmlFor="email"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={ (e) => setName(e.target.value) }
          value={ name }
          autoFocus={autoFocus}
        />
      </div>}
      <div className="mb-3">
        <label
          htmlFor="email"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="name@example.com"
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          autoFocus={!autoFocus}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password with at least 6 characters"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
    </form>
  )
}

export default Form
