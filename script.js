// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmkWgl8mlsoocCLsnJ3N5GNHKBTJInO3M",
  authDomain: "fir-test-c60fb.firebaseapp.com",
  projectId: "fir-test-c60fb",
  storageBucket: "fir-test-c60fb.appspot.com",
  messagingSenderId: "991280751942",
  appId: "1:991280751942:web:986e28426fa43b51293147",
  measurementId: "G-627M73FDFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);