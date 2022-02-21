// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_5AN07hU6UwQZUwb6T3LMn_uCk_LlEIM",
  authDomain: "fir-auth-cef23.firebaseapp.com",
  projectId: "fir-auth-cef23",
  storageBucket: "fir-auth-cef23.appspot.com",
  messagingSenderId: "545310381323",
  appId: "1:545310381323:web:7940d17237c088c22bbe0e"
};

const app = initializeApp(firebaseConfig);

export default app;