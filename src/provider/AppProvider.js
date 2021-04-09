import React, { useState } from 'react';
import AppContext from '../context/AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongData, setWrongData] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [messageOfError, setMessageOfError] = useState('');
  const [userRegistered, setUserRegistered] = useState(false);

  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    wrongData,
    setWrongData,
    isDisable,
    setIsDisable,
    messageOfError,
    setMessageOfError,
    userRegistered,
    setUserRegistered,
  }
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
