import { useContext, useState, useEffect, createContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("hi");
    // return {};
  };

  return (
    <AppContext.Provider value={{ handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
