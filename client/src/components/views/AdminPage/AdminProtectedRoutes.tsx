import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

type DecodedToken = {
  raw: string;
  header: {
    alg: string;
    typ: string;
  };
  payload: {
    sub: string;
    rol: boolean;
    iat: number;
    exp: number;
  };
};

function jwtDecode(t: string) {
  const token: DecodedToken = {
    raw: "",
    header: {
      alg: "",
      typ: "",
    },
    payload: {
      sub: "",
      rol: false,
      iat: 0,
      exp: 0,
    },
  };
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split(".")[0]));
  token.payload = JSON.parse(window.atob(t.split(".")[1]));
  return token;
}

const isAdmin = () => {
  const [userCookie] = useCookies();
  try {
    const decodedToken = jwtDecode(userCookie["token"]);
    return decodedToken.payload.rol;
  } catch (err) {
    <Navigate to="/" />;
  }
};

const AdminProtectedRoutes = () => {
  const auth = isAdmin();

  return auth ? <Outlet /> : <Navigate to="/user/login" />;
};

export default AdminProtectedRoutes;
