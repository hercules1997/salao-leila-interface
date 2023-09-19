import React from "react";
import ReactDOM from "react-dom/client";
import { Flip, ToastContainer } from "react-toastify";
import { FirebaseAppProvider } from "reactfire";
import AppProvider from "./hooks";
import Routes from "./routes/routes";
import GlobalStyles from "./common/styles/globalStyles";

const firebaseConfig = {
  apiKey: "AIzaSyB0z3nURHhMYaNzt3BucArFQ5HNM_PIP3Y",
  authDomain: "leila-salao.firebaseapp.com",
  projectId: "leila-salao",
  storageBucket: "leila-salao.appspot.com",
  messagingSenderId: "840759625848",
  appId: "1:840759625848:web:71270656599455745dc58d",
  measurementId: "G-H2J8C1JMS5",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Routes />
      </FirebaseAppProvider>
    </AppProvider>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      transition={Flip}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <GlobalStyles />
  </>
);
