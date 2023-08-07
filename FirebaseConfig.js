import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQn48YUBAOs98KGB046IgSnMjZqDGH2N0",
  authDomain: "bugbyte-b2796.firebaseapp.com",
  projectId: "bugbyte-b2796",
  storageBucket: "bugbyte-b2796.appspot.com",
  messagingSenderId: "712193416928",
  appId: "1:712193416928:web:e3f4d83ee9e100df3dba85"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);