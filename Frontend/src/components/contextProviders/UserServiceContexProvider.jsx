import { createContext, useContext } from "react";

const UserServiceContext = createContext();

export function UserServiceProvider({userService, children }) {
  return (
    <UserServiceContext.Provider value={userService}>
      {children}
    </UserServiceContext.Provider>
  );
}

export const useUserService = () => useContext(UserServiceContext);