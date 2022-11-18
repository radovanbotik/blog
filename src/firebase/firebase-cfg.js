// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC-K1TcADt0wUvLudpxDNtX0aALkK5PbI",
  authDomain: "firstblog-6475f.firebaseapp.com",
  projectId: "firstblog-6475f",
  storageBucket: "firstblog-6475f.appspot.com",
  messagingSenderId: "1061971261274",
  appId: "1:1061971261274:web:fa7b99ed6634e7462ca563",
  measurementId: "G-1S1QL2G98V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
