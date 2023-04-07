
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4do1OEr-B19l1XH4Ake72IXV1b83dF3I",
  authDomain: "sacaryaweb.firebaseapp.com",
  projectId: "sacaryaweb",
  storageBucket: "sacaryaweb.appspot.com",
  messagingSenderId: "344452153022",
  appId: "1:344452153022:web:232d4e2bed9e97347368ef"
};


const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);