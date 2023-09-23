import React from "react";
import {  Navigate } from "react-router-dom";
import paths from "../common/constants/paths";

export function PrivateRoute({ children, redirectTo, isAdmin,  }) {
  const user = localStorage.getItem("salaoleila:userData");
  // * FUNÇÃO PARA TORNAR ROTAS PRIVADAS */

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to={paths.HomeInit} />;
  }

  return (
    <React.Fragment>
      {user ? children : <Navigate to={redirectTo} />}
    </React.Fragment>
  );
}

