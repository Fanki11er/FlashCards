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
    Name: '',
    Settings: {
      DailyFlashCards: 10,
      MaximumBreak: 60,
      PercentNew: 30,
    },
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