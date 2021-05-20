import firebase from "firebase";
import "firebase/database";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaxHfHkiubjl__Bk0QkD1k4q_o4JyMsTk",
  authDomain: "gbv-app-1442a.firebaseapp.com",
  databaseURL: "https://gbv-app-1442a-default-rtdb.firebaseio.com",
  projectId: "gbv-app-1442a",
  storageBucket: "gbv-app-1442a.appspot.com",
  messagingSenderId: "70630679271",
  appId: "1:70630679271:web:b09c3fdbe10886732b3842",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export default db;
