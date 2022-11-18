import { useContext, useState, useEffect, createContext } from "react";
import { app, db, auth, provider } from "../firebase/firebase-cfg";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AppContext = createContext();

const Context = ({ children }) => {
  //Post title+body
  const [message, setMessage] = useState({
    title: "",
    body: "",
  });

  //Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Input Change
  const handleChange = e => {
    const element = e.target.name;
    const value = e.target.value;
    setMessage(prev => {
      return { ...prev, [element]: value };
    });
  };

  //Submit Confirmation
  const handleSubmit = e => {
    e.preventDefault();
  };

  //Authentification
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <AppContext.Provider value={{ handleSubmit, handleChange, handleLogin }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
