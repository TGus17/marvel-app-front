import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyUser } from '../util/verifications';
import { Form, ButtonComponent } from '../components';
import AppContext from '../context/AppContext';
import './styles/Login.css';


function Profile() {
  const {setEmail, setPassord, setName} = useContext(AppContext);
  // const [user, setUser] = useState({});
  const history = useHistory();

  const setUser = (user) => {
    setEmail(user.email);
    setName(user.name);
  }
  const isUserLogged = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) return history.push('/');
    verifyUser(token, history, setUser);
  }

  useEffect(() => {
    isUserLogged();
  }, []);

  return (
    <div className="login-container">
      <Form showName={true} />
    </div>
  )
}

export default Profile
