import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Implement initialization from localStorage
  // Check if there's a stored token when the app loads
  useEffect(() => {
    /**
     * 🎯 TODO FOR LEARNERS:
     *
     * Implement the logic to check localStorage for an existing token and user.
     *
     * Steps:
     * 1. Get the token from localStorage using localStorage.getItem('token')
     * 2. Get the user from localStorage using localStorage.getItem('user')
     * 3. If both exist, parse the user JSON and set the state
     * 4. Always set isLoading to false at the end
     *
     * Hint: Remember to wrap JSON.parse in a try-catch for safety!
     */

    // Your implementation here...

    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (e) {
        console.error('Failed to parse user or token from localStorage', e);
      }
    }

    setIsLoading(false);
  }, []);

  // TODO: Implement login function
  const login = (newToken: string, newUser: User) => {

    /**
     *
     * 🎯 TODO FOR LEARNERS:
     *
     * Implement the login function to save the authentication state.
     *
     * Steps:
     * 1. Save the token to localStorage
     * 2. Save the user object to localStorage (use JSON.stringify)
     * 3. Update the state (setToken, setUser)
     */

    // Your implementation here...
    
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);


    console.log('TODO: Implement login function  ........DONE', { newToken, newUser });
  };

  // TODO: Implement logout function
  const logout = () => {
    /**
     * 🎯 TODO FOR LEARNERS:
     *
     * Implement the logout function to clear the authentication state.
     *
     * Steps:
     * 1. Remove the token from localStorage
     * 2. Remove the user from localStorage
     * 3. Clear the state (setToken(null), setUser(null))
     */

    // Your implementation here...
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    console.log('TODO: Implement logout function  ........DONE');
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
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
