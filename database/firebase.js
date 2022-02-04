import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyANFqv0H50VcB1IRUzvpPuWJZYSFoVUbT8",
    authDomain: "food-finder-ca9e3.firebaseapp.com",
    projectId: "food-finder-ca9e3",
    storageBucket: "food-finder-ca9e3.appspot.com",
    messagingSenderId: "756545514899",
    appId: "1:756545514899:web:10c779f508b1b8735dcc66",
    measurementId: "G-F6DHJWB9LF"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);