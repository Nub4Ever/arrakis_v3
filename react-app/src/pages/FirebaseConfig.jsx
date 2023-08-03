
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRbEdoq-a1cNuMzSgt9bObtxtxo65ykxI",
  authDomain: "bonds-f50e9.firebaseapp.com",
  projectId: "bonds-f50e9",
  storageBucket: "bonds-f50e9.appspot.com",
  messagingSenderId: "294827967669",
  appId: "1:294827967669:web:4a996b363e7394a1252afc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

