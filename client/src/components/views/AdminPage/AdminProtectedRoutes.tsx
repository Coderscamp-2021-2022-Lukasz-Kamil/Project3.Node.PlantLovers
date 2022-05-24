import { Method } from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
import useFetchData from "../../../hooks/UseFetch";

const AdminuseAuth = () => {
  const user = true;

  const { response, error, loading } = useFetchData({
    url: "/users",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  });

  //

  if (user) {
    return true;
  } else {
    return false;
  }
};

const AdminProtectedRoutes = () => {
  const auth = AdminuseAuth();

  return auth ? <Outlet /> : <Navigate to="/user/login" />;
};

export default AdminProtectedRoutes;
