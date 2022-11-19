import { useContext, useState, useEffect, createContext } from "react";
import {
  db,
  auth,
  provider,
  addDoc,
  getDocs,
  collection,
} from "../firebase/firebase-cfg";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();
const posts = collection(db, "posts");

const Context = ({ children }) => {
  //Redirect to homepage
  const navigate = useNavigate();
  //Post title+body
  const [message, setMessage] = useState({
    title: "",
    body: "",
  });
  //Posts in databse
  const [database, setDatabase] = useState([]);
  //Login State + user Info
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  //Input Change
  const handleChange = e => {
    const element = e.target.name;
    const value = e.target.value;
    setMessage(prev => {
      return { ...prev, [element]: value };
    });
  };

  //Data Exchange

  const sendData = async () => {
    await addDoc(posts, { message, user });
    navigate("/");
  };
  //SEND DATA
  const handleSubmit = e => {
    e.preventDefault();
    sendData();
  };
  //Login + Authentification
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setIsLoggedIn(true);
        setUser({ name: user.displayName, id: user.uid });
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
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

  // //Fetch data from Firebase
  const fetchData = async () => {
    const data = await getDocs(posts);
    if (data) {
      setDatabase(data.docs);
    }
  };
  //redirect to login right after render
  // useEffect(() => {
  //   if (!isLoggedIn) navigate("/login");
  // }, []);
  useEffect(() => {
    fetchData();
  }, [database]);
  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handleChange,
        handleLogin,
        isLoggedIn,
        setIsLoggedIn,
        handleLogOut,
        database,
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
