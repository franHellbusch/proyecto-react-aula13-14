import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh-zf_YCC3Z-2WpYSo4dbAMTuIzS6QuWk",
  authDomain: "aula-13-14-a2f35-462a1.firebaseapp.com",
  projectId: "aula-13-14-a2f35",
  storageBucket: "aula-13-14-a2f35.appspot.com",
  messagingSenderId: "505491374955",
  appId: "1:505491374955:web:3fb94770ccdcf6b3af422e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
