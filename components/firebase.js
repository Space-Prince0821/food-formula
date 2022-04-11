import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref as sRef} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWupPQqghGBAwODWB-7J5gqSg8M_iuq0",
  authDomain: "food-formula-2f429.firebaseapp.com",
  projectId: "food-formula-2f429",
  storageBucket: "food-formula-2f429.appspot.com",
  messagingSenderId: "347599315103",
  appId: "1:347599315103:web:63a6f7bfbfba62867802aa",
  measurementId: "G-Y4CE2XLET4"
};

const app = initializeApp(firebaseConfig);

export default app;