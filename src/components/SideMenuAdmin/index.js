import { LogoutOutlined } from "@mui/icons-material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import paths from "../../common/constants/paths";

import { useUser } from "../../hooks/UserContext";
import listLinks from "./menu-list";
import {
  ContainerItems,
  ContainerMenu,
  ListLink,
  ContainerLogout,
} from "./style";
import { Logo } from "../../Pages/Client/Login/style";
import LogoImg from "../../common/assets/logo.png";
export function SideMenuAdmin({ path }) {
  const { logout } = useUser();
  const navigate = useNavigate();

  return (
    <ContainerMenu>
      <Logo style={{ marginLeft: "35px" }} src={LogoImg} />
      <hr className="hr"></hr>
      {listLinks.map((item) => (
        <ContainerItems key={item.id}>
          <ListLink to={item.link} isActive={path === item.link}>
            <item.icon className="icon" to={item.link} />
            {item.label}
          </ListLink>
        </ContainerItems>
      ))}
      <hr></hr>
      <ContainerLogout
        onClick={() => {
          logout();

          navigate(paths.Login);
        }}
      >
        <ListLink style={{ color: "#FF0000" }}>
          <LogoutOutlined className="iconLogout" />
          Sair
        </ListLink>
      </ContainerLogout>
    </ContainerMenu>
  );
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
};
