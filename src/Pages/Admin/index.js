import PropTypes from "prop-types";
import React from "react";

import { SideMenuAdmin } from "../../components";
import paths from "../../common/constants/paths";
import AppointmentStatus from "./AppointmentStatus";
import { NewService } from "./NewService";
import { HomeInit, ListAppointment, OurServices } from "../../Pages";
import { Container, ContainerItems } from "./style";
function Admin({ path }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />

      <ContainerItems>
        {path === paths.AppointmentStatus && (
          <AppointmentStatus path={paths.AppointmentStatus} />
        )}
        {path === paths.ListAppointment && (
          <ListAppointment path={paths.ListAppointment} />
        )}
        {path === paths.Home && <HomeInit />}
        {path === paths.OurServices && <OurServices path={paths.OurServices} />}
        {path === paths.NewService && <NewService path={paths.NewService} />}
      </ContainerItems>
    </Container>
  );
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

export default Admin;
