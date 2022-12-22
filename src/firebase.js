// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhi3kAA4nDjvBFCMerJNBb2YeWXnSe0Oo",
  authDomain: "tic-tac-toe-4b760.firebaseapp.com",
  projectId: "tic-tac-toe-4b760",
  storageBucket: "tic-tac-toe-4b760.appspot.com",
  messagingSenderId: "53305843726",
  appId: "1:53305843726:web:d59f0223593ce6eb875c5f",
  measurementId: "G-N45X4V69BC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth=getAuth();
export {app,auth};
export default db;