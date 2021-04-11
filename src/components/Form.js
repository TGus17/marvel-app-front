import React, { useContext, useEffect } from 'react';
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
  } = useContext(AppContext);

  const verifyUserIsDeleted = () => {
    if (messageResponse === 'User has been deleted.') {
      setEmail('');
      setPassword('');
      setName('');
      localStorage.removeItem('token');
    }
  }

  useEffect(() => {
    verifyUserIsDeleted();
  }, []);

  return (
    <form
      className="row g-3"
    >
      {showName && <div className="mb-3">
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
          value={ name }
        />
      </div>}
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
          value={ email }
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
    </form>
  )
}

export default Form
