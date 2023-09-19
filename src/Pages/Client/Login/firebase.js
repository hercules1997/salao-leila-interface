// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyB0z3nURHhMYaNzt3BucArFQ5HNM_PIP3Y",
  authDomain: "leila-salao.firebaseapp.com",
  projectId: "leila-salao",
  storageBucket: "leila-salao.appspot.com",
  messagingSenderId: "840759625848",
  appId: "1:840759625848:web:71270656599455745dc58d",
  measurementId: "G-H2J8C1JMS5",
};



// Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  export  const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };