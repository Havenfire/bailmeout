// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB3dlD8M0EQX_8Oj0rOHqD4qgGGBzbh9E",
  authDomain: "bailmeout-3250b.firebaseapp.com",
  databaseURL: "https://bailmeout-3250b-default-rtdb.firebaseio.com",
  projectId: "bailmeout-3250b",
  storageBucket: "bailmeout-3250b.appspot.com",
  messagingSenderId: "936600629052",
  appId: "1:936600629052:web:a9ce19f2902280ea743839",
  measurementId: "G-JW16C81997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);