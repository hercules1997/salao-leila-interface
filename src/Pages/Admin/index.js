import PropTypes from "prop-types";
import React from "react";

// Importações de componentes e constantes
import { SideMenuAdmin } from "../../components";
import paths from "../../common/constants/paths";
import { NewService } from "./NewService";
import {
  HomeInit,
  ListAppointment,
  OurServices,
  NewCategory,
  EditAppointment,
  ListServices,
  EditServices,
  ListCategory,
  EditCategory,
} from "../../Pages";
import { Container, ContainerItems } from "./style";

// Função para renderizar as páginas de administração
function Admin({ path }) {
  return (
    <Container>
      {/* Componente de menu lateral para administração */}
      <SideMenuAdmin path={path} />

      <ContainerItems>
        {/* Renderização condicional das páginas com base no caminho (path) */}
        {path === paths.AppointmentStatus && (
          <ListAppointment path={paths.AppointmentStatus} />
        )}
        {path === paths.ListAppointment && (
          <ListServices path={paths.ListAppointment} />
        )}
        {path === paths.EditServices && (
          <EditServices path={paths.EditServices} />
        )}
        {path === paths.EditAppointment && (
          <EditAppointment path={paths.EditAppointment} />
        )}
        {path === paths.ListCategory && (
          <ListCategory  path={paths.ListCategory} />
        )}
        {path === paths.EditCategory && (
          <EditCategory path={paths.EditCategory} />
        )}
        {path === paths.NewCategory && <NewCategory path={paths.NewCategory} />}
        {path === paths.Home && <HomeInit />}
        {path === paths.OurServices && <OurServices path={paths.OurServices} />}
        {path === paths.NewService && <NewService path={paths.NewService} />}
      </ContainerItems>
    </Container>
  );
}

// PropType para o componente Admin
Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

export default Admin;
