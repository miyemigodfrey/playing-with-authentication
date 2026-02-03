import { useState, type ReactNode } from 'react';
import type { User } from '../types/auth';
import { AuthContext } from './AuthContext';


interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({children}: AuthProviderProps){

 const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  //const [isLoading, setIsLoading] = useState(false);


  const login = (newToken: string, newUser: User) => {
    setToken (newToken);
    setUser (newUser);
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    //isLoading,
    login,
    logout,
  };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}
