import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref as sRef} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaX10_nHBIDiewXLDNJPGj_fBB_Y9shNw",
  authDomain: "food-formula.firebaseapp.com",
  projectId: "food-formula",
  storageBucket: "food-formula.appspot.com",
  messagingSenderId: "177117132523",
  appId: "1:177117132523:web:dc030793408bb74b44b0ae",
  measurementId: "G-G4NGBBV1DX"
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