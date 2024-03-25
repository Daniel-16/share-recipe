"use client";
import { ReactNode, createContext, useState } from "react";

interface UsernameContextData {
  username: string;
  setUsername: (value: string) => void;
}

interface UsernameProviderProps {
  children: ReactNode;
}

const UserNameContext = createContext<UsernameContextData>({
  username: "",
  setUsername: () => {},
});

const UsernameProvider = ({ children }: UsernameProviderProps) => {
  const [username, setUsername] = useState<string>("");
  return (
    <UserNameContext.Provider value={{ username, setUsername }}>
      {children}
    </UserNameContext.Provider>
  );
};

export { UserNameContext, UsernameProvider };
