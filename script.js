
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwVXJhMI9bj2DxKQ3zYnv_g_6g3V7EjtM",
  authDomain: "team-project-25b23.firebaseapp.com",
  projectId: "team-project-25b23",
  storageBucket: "team-project-25b23.appspot.com",
  messagingSenderId: "591649782787",
  appId: "1:591649782787:web:08b591732dbd49dfe4a236",
  measurementId: "G-6XSQHKQVN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



