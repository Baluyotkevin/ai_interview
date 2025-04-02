// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeuNgxHkJ7m1JY6V6IxB5ZIyN-idiGlyM",
  authDomain: "kbaiprep.firebaseapp.com",
  projectId: "kbaiprep",
  storageBucket: "kbaiprep.firebasestorage.app",
  messagingSenderId: "620353679380",
  appId: "1:620353679380:web:840d4eaa303e3a52e0b701",
  measurementId: "G-5CPSHPY22V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);