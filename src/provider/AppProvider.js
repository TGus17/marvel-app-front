import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [comebackData, setComebackData] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [messageResponse, setMessageResponse] = useState('');
  const [showCharacters, setShowCharacters] = useState(true);
  const [showComics, setShowComics] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [copyrightText, setCopyrightText] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [getResponse, setGetResponse] = useState(false);
  const history = useHistory();

  const eraseDataFromState = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const clearStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    data,
    setData,
    comebackData,
    setComebackData,
    isDisable,
    setIsDisable,
    messageResponse,
    setMessageResponse,
    showCharacters,
    setShowCharacters,
    showComics,
    setShowComics,
    showSearchBar,
    setShowSearchBar,
    copyrightText,
    setCopyrightText,
    inputSearch,
    setInputSearch,
    getResponse,
    setGetResponse,
    eraseDataFromState,
    clearStorage,
  }
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
