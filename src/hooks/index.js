import PropTypes from "prop-types";
import React from "react";

import { AppointmentProvider } from "./AppointmentContext";
import { UserProvider } from "./UserContext";

// Componente AppProvider para fornecer contextos aninhados
const AppProvider = ({ children }) => (
  <UserProvider>
    <AppointmentProvider>{children}</AppointmentProvider>
  </UserProvider>
);

// PropType para o componente AppProvider
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
