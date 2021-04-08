import React from 'react';
import '../pages/styles/Login.css';

const Forms = ({ setEmail, setPassword }) => {
  return (
    <div>
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
      </form>
    </div>
  )
}

export default Forms
