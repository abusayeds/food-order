// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// real
const firebaseConfig = {
  apiKey: "AIzaSyBTYjM3OMR7oy76ykTxjkEXFv4geZLZD7E",
  authDomain: "food-order-a389a.firebaseapp.com",
  projectId: "food-order-a389a",
  storageBucket: "food-order-a389a.appspot.com",
  messagingSenderId: "153579530978",
  appId: "1:153579530978:web:8a74539a36191d52c5ccbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default (app);