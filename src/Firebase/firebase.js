// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKPFT93CGBx-MKmmaZktkQi6b7_yDCppY",
  authDomain: "school-profile-d7428.firebaseapp.com",
  projectId: "school-profile-d7428",
  storageBucket: "school-profile-d7428.appspot.com",
  messagingSenderId: "471240580102",
  appId: "1:471240580102:web:500b85e43a098cf103b787",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore();
export default firebase;
