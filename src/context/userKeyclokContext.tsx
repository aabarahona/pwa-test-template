import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext({});

const AuthKeyclockProvider = (props: any) => {
  const [userKeyclock, setUserKeyclock] = useState(null);

  const bxBusinessActiveSession: any = localStorage.getItem(
    'bxBusinessActiveSession',
  );

  useEffect(() => {
    if (bxBusinessActiveSession) {
      setUserKeyclock(bxBusinessActiveSession);
    }
  }, [bxBusinessActiveSession]);

  return (
    <AuthContext.Provider
      value={{ userKeyclock, setUserKeyclock }}
      {...props}
    />
  );
};

const useKeyclockAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthKeyclockProvider');
  }
  return context;
};

export { AuthKeyclockProvider, useKeyclockAuth };
