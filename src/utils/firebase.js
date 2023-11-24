// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD52zym2XpSKle5E5cgofSOqIm9RWfK6a8",
  authDomain: "nitflix-ad124.firebaseapp.com",
  projectId: "nitflix-ad124",
  storageBucket: "nitflix-ad124.appspot.com",
  messagingSenderId: "183126879658",
  appId: "1:183126879658:web:296335843cb7c9c002cfd3",
  measurementId: "G-BG6XPT3059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();