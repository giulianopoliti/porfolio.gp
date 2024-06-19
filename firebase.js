// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAwYKzGAPNCfjJvU0sgRP0IT4q-Zpf1Y4",
  authDomain: "porfolio-giuliano.firebaseapp.com",
  projectId: "porfolio-giuliano",
  storageBucket: "porfolio-giuliano.appspot.com",
  messagingSenderId: "470731839984",
  appId: "1:470731839984:web:1cdbfabf7b95e5ce44e535",
  measurementId: "G-8CVD2ZWE7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);