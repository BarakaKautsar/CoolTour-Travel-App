// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe8_-3NxSWTEmc_g-ga0TH4eE083aBGfQ",
  authDomain: "cooltour-app.firebaseapp.com",
  projectId: "cooltour-app",
  storageBucket: "cooltour-app.appspot.com",
  messagingSenderId: "51204554786",
  appId: "1:51204554786:web:e98ec29be0f500403c0a7b",
  measurementId: "G-X57RR6J6PK"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
