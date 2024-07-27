// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHeMGa_BlGRmBP7aNyWXQ7yjfB2g_ugG8",
  authDomain: "register-bommusic.firebaseapp.com",
  projectId: "register-bommusic",
  storageBucket: "register-bommusic.appspot.com",
  messagingSenderId: "1097281335506",
  appId: "1:1097281335506:web:8db6bd70ad557e47703d0b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;