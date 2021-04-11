import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyUser } from '../util/verifications';
import { Form, ButtonComponent } from '../components';
import AppContext from '../context/AppContext';
import './styles/Login.css';


function Profile() {
  const {email, setEmail, password, name, setName, comebackData, messageResponse} = useContext(AppContext);
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
      <div>
      <ButtonComponent
        body={ { name, email, password, } }
        label="Save Changes"
        endpoint="user"
        redirect="/"
        method="PUT"
      />
      <ButtonComponent
        body={null}
        label="Delete User"
        endpoint="user"
        redirect="/"
        method="DELETE"
      />
      </div>
      <div>
        { comebackData && messageResponse }
      </div>
    </div>
  )
}

export default Profile
