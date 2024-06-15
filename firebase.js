// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqG4iSRZKCH_8fGJSOflbDGO0-7Z-TJZM",
  authDomain: "porfoliogp-f3737.web.app",
  projectId: "porfoliogp-f3737",
  storageBucket: "porfoliogp-f3737.appspot.com",
  messagingSenderId: "988096466238",
  appId: "1:988096466238:web:cd57b538abdfbe55ceb06f",
  measurementId: "G-BR0RKJCHJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);