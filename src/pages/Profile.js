import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyUser } from '../util/verifications';
// import { requestProcess } from '../service';

function Profile() {
  const [user, setUser] = useState({});
  const history = useHistory();
  
  const isUserLogged = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) return history.push('/');
    verifyUser(token, history, setUser);
  }

  useEffect(() => {
    isUserLogged();
  }, []);

  return (
    <div>
      profile user
    </div>
  )
}

export default Profile
