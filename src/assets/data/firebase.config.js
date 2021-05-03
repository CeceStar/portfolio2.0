import firebase from "firebase";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyB3J6tMhs1Q8sgJX0gap9gqAw8FWXzFC9c",
  authDomain: "this-is-me-cece.firebaseapp.com",
  projectId: "this-is-me-cece",
  storageBucket: "this-is-me-cece.appspot.com",
  messagingSenderId: "753134716500",
  appId: "1:753134716500:web:478c0c47af55ba210a0fc1",
  measurementId: "G-HB9PZNC6Z3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const dataBase = firebase.firestore();

export default dataBase;
