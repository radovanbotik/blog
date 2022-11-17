import { useContext, useState, useEffect, createContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const [message, setMessage] = useState({
    title: "",
    body: "",
  });

  const handleChange = e => {
    const element = e.target.name;
    const value = e.target.value;
    setMessage(prev => {
      return { ...prev, [element]: value };
    });
  };

  console.log(message);
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <AppContext.Provider value={{ handleSubmit, handleChange }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
