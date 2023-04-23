// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import Constants from "expo-constants"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpNm9Pu2DpDOSYn-8kWErOF_Q4b4eXC4",
  authDomain: "kavach-edd7e.firebaseapp.com",
  projectId: "kavach-edd7e",
  storageBucket: "kavach-edd7e.appspot.com",
  messagingSenderId: "377331123091",
  appId: "1:377331123091:web:9519a43651915e50dc9e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;