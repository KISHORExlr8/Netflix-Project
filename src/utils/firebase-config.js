import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQK3z42auugAr-D1olS0cZSqC1ts-gF4Y",
  authDomain: "netflix-clone-7dacd.firebaseapp.com",
  projectId: "netflix-clone-7dacd",
  storageBucket: "netflix-clone-7dacd.appspot.com",
  messagingSenderId: "839859391181",
  appId: "1:839859391181:web:5a0cb12b07f31bfca9f784",
  measurementId: "G-2P0F1ZTX3C"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
