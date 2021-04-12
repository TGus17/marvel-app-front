import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { isUserLogged } from '../util/exportedFunctions';
import { Form, ButtonComponent } from '../components';
import AppContext from '../context/AppContext';
import './styles/Login.css';


function Profile() {
  const {
    email,
    setEmail,
    password,
    name,
    setName,
    comebackData,
    messageResponse,
  } = useContext(AppContext);
  const history = useHistory();

  const clearStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    isUserLogged(history, setEmail, setName);
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
      <button
        onClick={ ()=> history.push('/home') }
        className="btn signin-button mb-0"
      >
        Cancel
      </button>
      <button
        onClick={ clearStorage }
        className="btn signin-button mb-0"
      >
        Log out
      </button>
      </div>
      <div>
        { comebackData && messageResponse }
      </div>
    </div>
  )
}

export default Profile
