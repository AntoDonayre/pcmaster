import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCX_Pw2xZ0BpckNE8luQnt7ae2d7DhpiJo",
    authDomain: "pcmarket-bbea1.firebaseapp.com",
    projectId: "pcmarket-bbea1",
    storageBucket: "pcmarket-bbea1.appspot.com",
    messagingSenderId: "420384097934",
    appId: "1:420384097934:web:3c0ce5f1d226b2c5016bdf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);