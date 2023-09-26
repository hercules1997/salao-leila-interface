/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";

import paths from "../../common/constants/paths";
import Logo from "../../common/assets/logo.png";
import { useUser } from "../../hooks/UserContext";
import {
  Container,
  ContainerLeft,
  PageLink,
  PageLinkExit,
  ContainerRight,
  ContainerText,
  PageLinkAdmin,
  AccountCircleSharpIconStyle,
} from "./style";

export function Header() {
  const { logout, userData } = useUser();

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <ContainerLeft>
          <img style={{ paddingLeft: "10%", width: "100px" }} src={Logo} />
          <PageLinkAdmin
            onClick={() => navigate(paths.AppointmentStatus)}
            isAdmin={userData.admin}
          >
            Administrador
          </PageLinkAdmin>
          <PageLink onClick={() => navigate(paths.HomeInit)}>Home</PageLink>
          <PageLink onClick={() => navigate(paths.OurServices)}>
            Serviços
          </PageLink>
          <PageLink onClick={() => navigate(paths.Appointment)}>
            Agendamentos
          </PageLink>
        </ContainerLeft>
        <ContainerRight>
          <PageLink
            style={{ marginLeft: "25px" }}
            onClick={() => navigate(paths.StatusOrders)}
          />

          <div className="barra"></div>
          <PageLink>
            <AccountCircleSharpIconStyle />
          </PageLink>
          <ContainerText>
            <p>Olá, {userData.name}</p>
            <PageLinkExit
              onClick={() => {
                logout();
                navigate(paths.Public);
              }}
            >
              Sair
            </PageLinkExit>
          </ContainerText>
        </ContainerRight>
      </Container>
    </>
  );
}
