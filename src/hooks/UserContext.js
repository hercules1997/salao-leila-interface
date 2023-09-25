import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Pages/Client/Login/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import paths from "../common/constants/paths";

// Criação do contexto para dados do usuário
const UserContext = createContext({});

// Provedor de contexto para dados do usuário
export const UserProvider = ({ children }) => {
  // Estado para armazenar os dados do usuário
  const [userData, setUserData] = useState({});

  // Função para atualizar e armazenar dados do usuário localmente
  const putUserData = async (userInfo) => {
    setUserData(userInfo);
    await localStorage.setItem("salaoleila:userData", JSON.stringify(userInfo));
  };

  // Função para fazer login com autenticação do Google
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

      // Redirecionar para a página inicial após o login
      <Navigate to={paths.Home} />;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  // Função para fazer logout
  const logout = async () => {
    await localStorage.removeItem("salaoleila:userData");
  };

  // Efeito para carregar dados do usuário do local storage quando a página é carregada
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
    <UserContext.Provider
      value={{ putUserData, userData, logout, loginUserGoogle }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de dados do usuário
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }

  return context;
};

// PropType para o componente de Provedor de Usuário
UserProvider.propTypes = {
  children: PropTypes.node,
};
