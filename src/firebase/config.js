// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2egzlwM7wjxmjtrWGYNjH4xRpOjfkVVU",
  authDomain: "reactjs--olazabal.firebaseapp.com",
  projectId: "reactjs--olazabal",
  storageBucket: "reactjs--olazabal.appspot.com",
  messagingSenderId: "982342943273",
  appId: "1:982342943273:web:96780be4b5e0ab557d9238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);