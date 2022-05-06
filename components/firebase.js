import { initializeApp } from "firebase/app";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANFqv0H50VcB1IRUzvpPuWJZYSFoVUbT8",
  authDomain: "food-finder-ca9e3.firebaseapp.com",
  databaseURL: "https://food-finder-ca9e3-default-rtdb.firebaseio.com",
  projectId: "food-finder-ca9e3",
  storageBucket: "food-finder-ca9e3.appspot.com",
  messagingSenderId: "756545514899",
  appId: "1:756545514899:web:10c779f508b1b8735dcc66",
  measurementId: "G-F6DHJWB9LF"
};

const app = initializeApp(firebaseConfig);

export default app;