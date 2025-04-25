
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { setUserId } from '@snowplow/browser-tracker';

interface AuthContextType {
  isLoggedIn: boolean;
  user: { email: string; name: string } | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  const login = () => {
    setIsLoggedIn(true);
    setUser({
      email: "johnsmith@gmail.com",
      name: "John Smith"
    });

    setUserId('johnsmith@gmail.com');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
