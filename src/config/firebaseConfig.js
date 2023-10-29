// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSqXpYObdiqMlWNrGgX366ECo1w6nU-7M",
  authDomain: "zero-hunger-631bc.firebaseapp.com",
  projectId: "zero-hunger-631bc",
  storageBucket: "zero-hunger-631bc.appspot.com",
  messagingSenderId: "665738712394",
  appId: "1:665738712394:web:783a1ef81ca81e70d85db3",
  measurementId: "G-80KRGSD443" 
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDSqXpYObdiqMlWNrGgX366ECo1w6nU-7M",
//   authDomain: "zero-hunger-631bc.firebaseapp.com",
//   projectId: "zero-hunger-631bc",
//   storageBucket: "zero-hunger-631bc.appspot.com",
//   messagingSenderId: "665738712394",
//   appId: "1:665738712394:web:783a1ef81ca81e70d85db3",
//   measurementId: "G-80KRGSD443"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
