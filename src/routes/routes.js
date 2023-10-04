import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import paths from "../common/constants/paths";

import {
  Home,
  HomePublic,
  Login,
  MyScheduling,
  OurServices,
  Register,
} from "../Pages";

import Admin from "../Pages/Admin";
import { PrivateRoute } from "./private-route";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        {/** ROTAS PUBLICAS */}
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Register} element={<Register />} />
        <Route path={paths.Public} element={<HomePublic />} />

        {/* ROTAS PRIVADAS */}
        <Route
          path={paths.HomeInit}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.OurServices}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <OurServices />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Appointment}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <MyScheduling />
            </PrivateRoute>
          }
        />

        {/* ROTAS DE ADMINISTRADOR */}
        <Route
          path={paths.AppointmentStatus}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.AppointmentStatus} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.NewService}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.NewService} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.ListAppointment}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.ListAppointment} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.EditServices}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.EditServices} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.EditAppointment}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.EditAppointment} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.ListCategory}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.ListCategory} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.EditCategory}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.EditCategory} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.NewCategory}
          element={
            <PrivateRoute component={Admin} isAdmin>
              <Admin path={paths.NewCategory} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
