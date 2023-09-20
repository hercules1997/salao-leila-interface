import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Pages/Client/Login/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import paths from "../common/constants/paths";
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const putUserData = async (userInfo) => {
    setUserData(userInfo);

    await localStorage.setItem("salaoleila:userData", JSON.stringify(userInfo));
  };

// FUNÇÃO PARA ADICIONAR DADOS DA AUTENTICAÇÃO PELO GOOGLE (FALTA CRIAR A CONEXÃO)
  const loginUserGoogle = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      localStorage.setItem("authToken", idToken);

      <Navigate  to={paths.Home}/>

    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = async () => {
    await localStorage.removeItem("salaoleila:userData");
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem("salaoleila:userData");

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData, logout, loginUserGoogle}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with Usercontext");
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
