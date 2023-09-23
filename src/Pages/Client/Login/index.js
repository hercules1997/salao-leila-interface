import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import LogoLogin from "../../../common/assets/logo.png";
import { Button, ErrorMessage } from "../../../components";
import paths from "../../../common/constants/paths";
import { auth } from "./firebase";
import { useUser } from "../../../hooks/UserContext";
import {
  Container,
  Background,
  ContainerItens,
  ContainerMaster,
  Label,
  Logo,
  Input,
  SingLink,
} from "./style";
import { GoogleAuthProvider } from "firebase/auth";
import api from "../../../services/api";

// * FUNÇÃO PARA RENDERIZAÇÃO DO LOGIN */

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();
  // * SCHEMA PARA VALIDAÇÕES COM YUP   */

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Por favor digite um e-mail válido")
      .required("E-mail é obrigatório"),
    password: Yup.string()
      .required("Senha obrigatória")
      .min(8, "Senha deve ter no mínimo 8 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (clientData) => {
    try {
      const { data } = await toast.promise(
        api.post("sessions", {
          email: clientData.email,
          password: clientData.password,
        }),
        {
          pending: "Verificando seus dados...",
          success: "Seja bem-vindo(a)!",
          error: "Dados incorretos",
        }
      );

      putUserData(data);
      setTimeout(() => {
        if (data.admin) {
          navigate(paths.AppointmentStatus);
        } else {
          navigate(paths.HomeInit);
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  // * CONFIG DO GOOGLE  */

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/home",
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <ContainerMaster>
      <Container>
        <ContainerItens>
          <Logo src={LogoLogin} />

          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>

            <Label>E-mail</Label>
            <Input
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit">Entrar</Button>
            <SingLink>
              Não tem cadastro ainda?
              <Link to={paths.Register}>Cadastre-se aqui!</Link>
            </SingLink>
          </form>
        </ContainerItens>
        <Background />
      </Container>
    </ContainerMaster>
  );
}
