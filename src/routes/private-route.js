import PropTypes from "prop-types";
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { Header } from "../components";
import paths from "../common/constants/paths";

export function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem("salaoleila:userData");

  if (!user) {
    return <Navigate to={paths.Login} />;
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to={paths.HomeInit} />;
  }

  return (
    <React.Fragment>
      {!isAdmin && <Header />}
      <Route {...rest} element={component} />
    </React.Fragment>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func]),
  isAdmin: PropTypes.bool,
};
