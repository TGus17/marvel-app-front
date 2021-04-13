import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { isUserLogged } from '../util/exportedFunctions';
import { Form, ButtonComponent, MenuButton } from '../components';
import AppContext from '../context/AppContext';
import hulk from '../images/icons/hulk.svg';
import './styles/Login.css';
import './styles/Profile.css';


function Profile() {
  const {
    email,
    setEmail,
    password,
    name,
    setName,
    comebackData,
    messageResponse,
    clearStorage,
  } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    isUserLogged(history, setEmail, setName);
  }, []);

  return (
    <div className="login profile">
      <img
        src={ hulk }
        className="image-user"
        width="100"
        height="100"
        alt="login"
      />
      <h1>Profile</h1>
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
      <MenuButton
        onClick={ ()=> history.push('/home') }
        label="Cancel"
      />
      <MenuButton
        onClick={ clearStorage }
        label="Log out"
      />
      </div>
      <div>
        { comebackData && messageResponse }
      </div>
    </div>
  )
}

export default Profile
