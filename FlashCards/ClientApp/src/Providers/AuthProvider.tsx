import React, { createContext, useState } from 'react';

interface Props {
  children: React.ReactChild;
}
interface AuthUser {
  Name: '';
}

interface AuthContextInterface {
  setAuth: React.Dispatch<React.SetStateAction<AuthUser | undefined>>;
  auth: AuthUser | undefined;
}

export const AuthContext = createContext<AuthContextInterface>({
  setAuth: () => {},
  auth: {
    Name: '',
  },
});

const AuthProvider = (props: Props) => {
  const { children } = props;
  const [auth, setAuth] = useState<AuthUser>();
  const context = {
    auth,
    setAuth,
  };
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

