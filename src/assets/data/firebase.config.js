// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMRawuRya3HfGe2xQs0gXxpGqay20Ih-Q",
  authDomain: "cecilia-hallerby.firebaseapp.com",
  projectId: "cecilia-hallerby",
  storageBucket: "cecilia-hallerby.appspot.com",
  messagingSenderId: "416427913432",
  appId: "1:416427913432:web:bd3cf2fc8045196ca5e7ad",
  measurementId: "G-8EZCF8907G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);