import firebase from "firebase";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyAGvTNNPCax7okAx4T9BLBqVRbQPTHqjak",
  authDomain: "my-personal-page-1373e.firebaseapp.com",
  projectId: "my-personal-page-1373e",
  storageBucket: "my-personal-page-1373e.appspot.com",
  messagingSenderId: "498792809567",
  appId: "1:498792809567:web:1806d55edfbb68735287ea",
  measurementId: "G-STJ2MVNQKP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const dataBase = firebase.firestore();

export default dataBase;
