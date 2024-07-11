// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm4GMp7WyKyw2edeCR6dmhSL5G8oKLyCs",
  authDomain: "otp-verification-using-phone.firebaseapp.com",
  projectId: "otp-verification-using-phone",
  storageBucket: "otp-verification-using-phone.appspot.com",
  messagingSenderId: "43251333971",
  appId: "1:43251333971:web:c57aa4ae246c71f962ffa6",
  measurementId: "G-LML4N94KLG"

};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };