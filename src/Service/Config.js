import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: "pcmarket-bbea1.firebaseapp.com",
    projectId: "pcmarket-bbea1",
    storageBucket: "pcmarket-bbea1.appspot.com",
    messagingSenderId: "420384097934",
    appId: "1:420384097934:web:3c0ce5f1d226b2c5016bdf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);