
import { createContext, useContext } from "react";

const SecurityServiceContext = createContext();

export function SecurityServiceProvider({securityService, children }) {
  return (
    <SecurityServiceContext.Provider value={securityService}>
      {children}
    </SecurityServiceContext.Provider>
  );
}

export const useSecurityService = () => useContext(SecurityServiceContext);