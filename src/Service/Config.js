// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX_Pw2xZ0BpckNE8luQnt7ae2d7DhpiJo",
  authDomain: "pcmarket-bbea1.firebaseapp.com",
  projectId: "pcmarket-bbea1",
  storageBucket: "pcmarket-bbea1.appspot.com",
  messagingSenderId: "420384097934",
  appId: "1:420384097934:web:3c0ce5f1d226b2c5016bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);