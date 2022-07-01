import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp ({
    apiKey: "AIzaSyAsdYD4VDWD9KVWcAm7rC02VHlBXqiWUeA",
    authDomain: "note-tracker-202c4.firebaseapp.com",
    projectId: "note-tracker-202c4",
    storageBucket: "note-tracker-202c4.appspot.com",
    messagingSenderId: "486369115275",
    appId: "1:486369115275:web:6661b5cbaeed4cdb42e88e",
    measurementId: "G-10X1ZVSSJM"
});
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const storage = firebase.storage()
//   const analytics = getAnalytics(app);

// Firebase storage reference
const storage = getStorage(app);

export default storage;