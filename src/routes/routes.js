import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import paths from "../common/constants/paths";

// import { PrivateRoute } from "./private-route";
import Admin from "../Pages/Admin";
import {
  Home,
  HomePublic,
  Login,
  MyScheduling,
  OurServices,
  Register,
} from "../Pages";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Register} element={<Register />} />
        <Route path={paths.Public} element={<HomePublic />} />
        <Route path={paths.HomeInit} element={<Home />} />
        <Route path={paths.OurServices} element={<OurServices />} />
        <Route path={paths.Appointment} element={<MyScheduling />} />
        <Route
          path={paths.AppointmentStatus}
          element={<Admin path={paths.AppointmentStatus} />}
        />
        <Route
          path={paths.NewService}
          element={<Admin path={paths.NewService} />}
        />

        <Route path={paths.User} element={<Admin path={paths.User} />} />

        <Route
          path={paths.ListAppointment}
          element={<Admin path={paths.ListAppointment} />}
        />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
