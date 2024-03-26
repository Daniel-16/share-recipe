"use client";
import { createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextData {
  isAuthenticated: string;
  setIsAuthenticated: (value: string) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: "",
  setIsAuthenticated: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<string>("");
  useEffect(() => {
    const authValue = localStorage.getItem("isAuthenticated");
    if (authValue) {
      setIsAuthenticated("true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
