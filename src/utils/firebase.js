// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  authDomain: "netflix-gpt-6aec9.firebaseapp.com",
  projectId: "netflix-gpt-6aec9",
  storageBucket: "netflix-gpt-6aec9.appspot.com",
  messagingSenderId: "920502725030",
  appId: "1:920502725030:web:0ccff8acba3ff776234767",
  measurementId: "G-SGH226SJBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();