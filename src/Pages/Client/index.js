import PropTypes from "prop-types";
import React from "react";

import { SideMenuAdmin } from "../../components";
import paths from "../../common/constants/paths";

import {
  HistoryAppointments,
  Scheduling,
  MyScheduling,
  OurServices,
  Register,
  Login,
  HomePublic,
} from "../../Pages";
import { Container, ContainerItems } from "./style";

 function Client({ path } ) {
  return (
    <Container>
      <SideMenuAdmin path={path} />

      <ContainerItems>
        {path === paths.ListProducts && <HistoryAppointments />}
        {path === paths.HomeInit && <HomePublic />}
        {path === paths.EditProducts && <MyScheduling />}
        {path === paths.ListCategory && <OurServices />}
        {path === paths.EditCategory && <Register />}
        {path === paths.NewCategory && <Scheduling />}
        {path === paths.Login && <Login />}
      </ContainerItems>
    </Container>
  );
}

Client.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};
export default Client