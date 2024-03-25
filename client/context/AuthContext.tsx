"use client";
import { createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const isBrowser = typeof window !== "undefined";
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    isBrowser
      ? () => {
          const storedValue = localStorage.getItem("isAuthenticated");
          return storedValue ? JSON.parse(storedValue) : false;
        }
      : false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
