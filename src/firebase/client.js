import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCwQ7iqfwyryLT90qbBV3_acJlX2yFZyJM",
  authDomain: "ecomerce-guillegelso.firebaseapp.com",
  projectId: "ecomerce-guillegelso",
  storageBucket: "ecomerce-guillegelso.appspot.com",
  messagingSenderId: "450637654250",
  appId: "1:450637654250:web:f9b20b99cdc350f84c8f93"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





