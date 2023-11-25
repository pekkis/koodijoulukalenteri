import { createContext, useContext } from "react";

const naughtyContext = createContext(0);

export const NaughtinessProvider = naughtyContext.Provider;

export const useNaughtiness = (): number => {
  return useContext(naughtyContext);
};
