// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGPQ-SIL1WaJwGClDGrs6_UUfymuWxaW8",
  authDomain: "wordji.firebaseapp.com",
  projectId: "wordji",
  storageBucket: "wordji.appspot.com",
  messagingSenderId: "845524760691",
  appId: "1:845524760691:web:9084fef359df9d19859206",
  measurementId: "G-8NNR1E554H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);