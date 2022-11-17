import { useContext, useState, useEffect, createContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
