// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA13LyzPzzLuZVCCC3l3C_UNLf8HA_TQtY",
  authDomain: "assessment-9b409.firebaseapp.com",
  projectId: "assessment-9b409",
  storageBucket: "assessment-9b409.appspot.com",
  messagingSenderId: "729054715350",
  appId: "1:729054715350:web:b408d02ec460b95e491877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export default app;