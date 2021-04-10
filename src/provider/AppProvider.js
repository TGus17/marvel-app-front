import React, { useState } from 'react';
import AppContext from '../context/AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comebackData, setComebackData] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [messageResponse, setMessageResponse] = useState('');
  // const [userRegistered, setUserRegistered] = useState(false);

  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    comebackData,
    setComebackData,
    isDisable,
    setIsDisable,
    messageResponse,
    setMessageResponse,
    // userRegistered,
    // setUserRegistered,
  }
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
