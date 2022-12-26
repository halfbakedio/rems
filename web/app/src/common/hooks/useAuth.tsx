import { createContext, useContext, useMemo, useState } from "react";

import AuthService from "@services/auth";
import { useLocalStorage } from "~hooks/useLocalStorage";

export interface IUserContext {
  id: number,
  email: string,
  username: string,
  token: string,
  image: string,
}

export interface IAuthContext {
  user: IUserContext,
  authenticated: boolean,
  login: (email: string, password: string) => void,
  logout: () => void,
}

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useLocalStorage("user", undefined);

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = AuthService.login(email, password);
      setAuthenticated(true);
      setUser(result);
      return result;
    } catch (error) {
      setUser(undefined);
      setAuthenticated(false);
    }
  };

  const handleLogout = () => {
    return new Promise<void>((resolve) => {
      AuthService.logout();
      setAuthenticated(false);
      resolve();
    });
  };

  const value = useMemo(() => (
    {
      user,
      authenticated,
      login: handleLogin,
      logout: handleLogout,
    }
  ), [user, authenticated]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw Error("The component using the auth context must be wrapped by the provider");
  }

  return context;
};
