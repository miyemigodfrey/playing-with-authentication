import { createContext, useState, useContext, type ReactNode, useEffect } from 'react';
import type { User } from '../types/auth';


interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string, user: User) => void
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      try {
        // Batch state updates asynchronously to avoid cascading renders
        Promise.resolve().then(() => {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        });
      } catch (e) {
        console.error('Failed to parse user or token from localStorage', e);
      }
    }
    // Always set loading to false after attempting to restore
    Promise.resolve().then(() => setIsLoading(false));
  }, []);

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
    isLoading,
    login,
    logout,
  };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}



export function useAuth() {
  const context =useContext (AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
