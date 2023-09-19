// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
import { getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk2f0PzbwAG-cgyZcXzFo6-NJshkFUXCo",
  authDomain: "image-gallery-91c6b.firebaseapp.com",
  projectId: "image-gallery-91c6b",
  storageBucket: "image-gallery-91c6b.appspot.com",
  messagingSenderId: "913068799741",
  appId: "1:913068799741:web:83a3aa6df6f0ee66403094",
  measurementId: "G-4QVG42DW08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);