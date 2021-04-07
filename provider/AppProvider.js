import React, { Children } from 'react';
import AppContext from '../context/AppContext';

function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      { Children }
    </AppContext.Provider>
  );
}

export default AppProvider;
