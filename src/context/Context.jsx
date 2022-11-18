import { useContext, useState, useEffect, createContext } from "react";
import { app, db, auth, provider } from "../firebase/firebase-cfg";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const Context = ({ children }) => {
  //Redirect to homepage
  const navigate = useNavigate();
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

  //Login + Authentification
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log({ credential });
        const token = credential.accessToken;
        console.log({ token });
        // The signed-in user info.
        const user = result.user;
        console.log({ user });
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  //LogOut
  const handleLogOut = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
      localStorage.clear();
      navigate("/login");
    });
  };

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handleChange,
        handleLogin,
        isLoggedIn,
        setIsLoggedIn,
        handleLogOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
