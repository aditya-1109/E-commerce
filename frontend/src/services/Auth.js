import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); 
  const setAdmin = (adminStatus) => {
    setIsAdmin(adminStatus); 
  };


  const value = {
    isAdmin,
    setAdmin
   
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
