import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "./DecodedToken";

const useAuth = () => {
  const [userCookie] = useCookies();

  try {
    const decodedToken = jwtDecode(userCookie["token"]);
    return decodedToken.payload.sub;
  } catch (err) {
    <Navigate to="/user/login" />;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/user/login" />;
};

export default ProtectedRoutes;
