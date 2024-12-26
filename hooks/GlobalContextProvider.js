"use client";

import { createContext, useState } from "react";

export const globalcontext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [mode, setMode] = useState(true);
  return (
    <globalcontext.Provider value={{ mode, setMode }}>
      {children}
    </globalcontext.Provider>
  );
};

export default GlobalContextProvider;
