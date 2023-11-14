// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn0IkwqjFVEuDKrBteVD4MJnokbyHExLI",
  authDomain: "react-to-do-cd429.firebaseapp.com",
  projectId: "react-to-do-cd429",
  storageBucket: "react-to-do-cd429.appspot.com",
  messagingSenderId: "27582430113",
  appId: "1:27582430113:web:99f96c63f1df06aa4069e0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)

