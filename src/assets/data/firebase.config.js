import firebase from "firebase";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyDMRawuRya3HfGe2xQs0gXxpGqay20Ih-Q",
  authDomain: "cecilia-hallerby.firebaseapp.com",
  projectId: "cecilia-hallerby",
  storageBucket: "cecilia-hallerby.appspot.com",
  messagingSenderId: "416427913432",
  appId: "1:416427913432:web:bd3cf2fc8045196ca5e7ad",
  measurementId: "G-8EZCF8907G",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const dataBase = firebase.firestore();

export default dataBase;
