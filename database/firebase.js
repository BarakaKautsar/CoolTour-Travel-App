import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe8_-3NxSWTEmc_g-ga0TH4eE083aBGfQ",
  authDomain: "cooltour-app.firebaseapp.com",
  projectId: "cooltour-app",
  storageBucket: "cooltour-app.appspot.com",
  messagingSenderId: "51204554786",
  appId: "1:51204554786:web:55491902841eebef3c0a7b",
  measurementId: "G-NWYG1XJG1N"
};

const app = initializeApp(firebaseConfig);

// // Authentication
export const auth = getAuth(app)

// // Firestore (Database)
// export const firestore = firebase.firestore();
