import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// * CONFIG PARA O FIREBASE DA AUTH DO GOOGLE  */

const firebaseConfig = {
  apiKey: "AIzaSyB0z3nURHhMYaNzt3BucArFQ5HNM_PIP3Y",
  authDomain: "leila-salao.firebaseapp.com",
  projectId: "leila-salao",
  storageBucket: "leila-salao.appspot.com",
  messagingSenderId: "840759625848",
  appId: "1:840759625848:web:71270656599455745dc58d",
  measurementId: "G-H2J8C1JMS5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
