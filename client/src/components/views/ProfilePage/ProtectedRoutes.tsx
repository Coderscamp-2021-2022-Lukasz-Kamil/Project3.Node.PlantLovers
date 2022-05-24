import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const [userCookie] = useCookies();

  if (userCookie["token"]) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/user/login" />;
};

export default ProtectedRoutes;
