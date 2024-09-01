import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [states, setState] = useState({
    bgcolor: 'dark',
    textcolor: 'light',
  });

  const updateUser = (newvalue) => {

    //console.log(newvalue);
    setState(newvalue) ;

    //console.log(states)
  };

  return (
    <AppContext.Provider value={{ states, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };