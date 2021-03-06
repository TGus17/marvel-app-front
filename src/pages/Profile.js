import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { isUserLogged } from '../util/exportedFunctions';
import { Form, ButtonComponent, MenuButton, MenuSettings } from '../components';
import AppContext from '../context/AppContext';
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
    randomIconPage,
  } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    isUserLogged(history, setEmail, setName);
  }, []);

  return (
    <div className="profile-container">
      <MenuSettings />
      <div className="login profile">
        <img
          src={ randomIconPage() }
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
          onClick={ () => clearStorage(history) }
          label="Log out"
        />
        </div>
        <div>
          { comebackData && messageResponse }
        </div>
      </div>
    </div>
  )
}

export default Profile
