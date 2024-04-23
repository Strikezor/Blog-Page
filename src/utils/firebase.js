// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-ee483.firebaseapp.com",
  projectId: "blog-ee483",
  storageBucket: "blog-ee483.appspot.com",
  messagingSenderId: "114523813946",
  appId: "1:114523813946:web:65b28a4c1a2f2b0cbe9d03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
