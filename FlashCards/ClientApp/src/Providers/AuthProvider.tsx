import React, { createContext, useState } from 'react';
import { AuthUser } from '../Interfaces/Interfaces';

interface Props {
  children: React.ReactChild;
}
interface AuthContextInterface {
  setAuth: React.Dispatch<React.SetStateAction<AuthUser | undefined>>;
  auth: AuthUser | undefined;
}

export const AuthContext = createContext<AuthContextInterface>({
  setAuth: () => {},
  auth: {
    id: 0,
    name: '',
    settings: {
      dailyFlashCards: 10,
      maximumBreak: 60,
      percentNew: 30,
    },
    accessToken: '',
  },
});

const AuthProvider = (props: Props) => {
  const { children } = props;
  const [auth, setAuth] = useState<AuthUser | undefined>({
    id: 0,
    name: '',
    settings: {
      dailyFlashCards: 10,
      maximumBreak: 60,
      percentNew: 30,
    },
    accessToken: '',
  });
  const context = {
    auth,
    setAuth,
  };
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
