import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTYA4zJOE7VgU2SQnT_ZePFJxXKnkDJj4",
    authDomain: "authvue-36134.firebaseapp.com",
    projectId: "authvue-36134",
    storageBucket: "authvue-36134.appspot.com",
    messagingSenderId: "465916624289",
    appId: "1:465916624289:web:9c176b375de47337699fe0",
    measurementId: "G-Z8HEGYV1R4"
};

initializeApp(firebaseConfig);

/// DB
const DB = getFirestore();
export { DB }