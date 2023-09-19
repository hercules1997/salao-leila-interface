import PropTypes from "prop-types";
import React from "react";

import { AppointmentProvider } from "./AppointmentContext";
import { UserProvider } from "./UserContext";

const AppProvider = ({ children }) => (
  <UserProvider>
    <AppointmentProvider>{children}</AppointmentProvider>
  </UserProvider>
);

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
