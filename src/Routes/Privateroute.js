import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Privateroute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroute;
