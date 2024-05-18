// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactjschat-f1829.firebaseapp.com",
  projectId: "reactjschat-f1829",
  storageBucket: "reactjschat-f1829.appspot.com",
  messagingSenderId: "44832472558",
  appId: "1:44832472558:web:887924682347180a9b22ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth();
export const db = getFirestore();
export const storage = getStorage();