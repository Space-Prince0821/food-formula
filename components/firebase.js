import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref as sRef} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_5AN07hU6UwQZUwb6T3LMn_uCk_LlEIM",
  authDomain: "fir-auth-cef23.firebaseapp.com",
  projectId: "fir-auth-cef23",
  storageBucket: "fir-auth-cef23.appspot.com",
  messagingSenderId: "545310381323",
  appId: "1:545310381323:web:7940d17237c088c22bbe0e",
};

const app = initializeApp(firebaseConfig);

//let file;

//const storage = getStorage();
//const storageRef = sRef(storage);

//const imageRef = sRef(storage, 'favicon.png');


//uploadBytes(imageRef, file).then((snapshot) => {
//  console.log("Uploaded a file!");
//});

//uploadBytes();

export default app;