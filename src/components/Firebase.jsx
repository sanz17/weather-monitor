// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//AIzaSyDrlaDowh5zln_mUfpSwLvkxr5GNpguk2A

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrlaDowh5zln_mUfpSwLvkxr5GNpguk2A",
  authDomain: "weather-monitoring-c447b.firebaseapp.com",
  projectId: "weather-monitoring-c447b",
  storageBucket: "weather-monitoring-c447b.appspot.com",
  messagingSenderId: "317265159535",
  appId: "1:317265159535:web:95786d90facabc92d4b49a",
  measurementId: "G-GX7G99SDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);