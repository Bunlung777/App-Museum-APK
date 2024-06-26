import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdq4zPAzGgWOroYFjQHzHUqPAqL_xE7O0",
  authDomain: "museumapp-42cda.firebaseapp.com",
  projectId: "museumapp-42cda",
  storageBucket: "museumapp-42cda.appspot.com",
  messagingSenderId: "652751305131",
  appId: "1:652751305131:web:5c0f01597ad2cc99b8baee",
  measurementId: "G-RKPSHS4BVF"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const analytics = getAnalytics(firebase.app());
const db = getFirestore(firebase.app());

export {db,firebase};
