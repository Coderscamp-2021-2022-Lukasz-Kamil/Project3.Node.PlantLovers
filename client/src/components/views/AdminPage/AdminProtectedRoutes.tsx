import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "../ProfilePage/ProtectedRoutes/DecodedToken";

const isAdmin = () => {
  const [userCookie] = useCookies();
  try {
    const decodedToken = jwtDecode(userCookie["token"]);
    return decodedToken.payload.rol;
  } catch (err) {
    <Navigate to="/user/login" />;
  }
};

const AdminProtectedRoutes = () => {
  const auth = isAdmin();

  return auth ? <Outlet /> : <Navigate to="/user/login" />;
};

export default AdminProtectedRoutes;
