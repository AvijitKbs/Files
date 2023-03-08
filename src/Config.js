// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const initial = {
  apiKey: "AIzaSyB5GH9yUPvrjlLchxGS4eyw2D1ciKExX9s",
  authDomain: "react-crud-fd039.firebaseapp.com",
  projectId: "react-crud-fd039",
  storageBucket: "react-crud-fd039.appspot.com",
  messagingSenderId: "633198964117",
  appId: "1:633198964117:web:7ca399025f7182e25a1a9c",
  measurementId: "G-5DJS80T1V4"
};

// Initialize Firebase
const app5 = initializeApp(initial);
export const db=getFirestore(app5)
