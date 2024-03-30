// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBs1mIqwq2gFkeU00m81lqOvotxfpBO1s",
  authDomain: "project-netflixgpt.firebaseapp.com",
  projectId: "project-netflixgpt",
  storageBucket: "project-netflixgpt.appspot.com",
  messagingSenderId: "403595993622",
  appId: "1:403595993622:web:9e09e2e64f667580114b37",
  measurementId: "G-YLEHQ3R6KX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
