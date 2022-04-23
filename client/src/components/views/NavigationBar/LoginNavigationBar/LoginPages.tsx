import React from "react";
import { NavBarButton } from "../MainNavigationBar/NavigationBar.style";
import {
  LoginNavBarButtonContainer,
  LoginPageLink,
} from "./LoginNavigationBar.style";

const LoginPages = () => {
  const pages = [
    { source: "/user/login", name: "Login" },
    { source: "/user/sign-up", name: "Sign-up" },
  ];
  return (
    <LoginNavBarButtonContainer>
      {pages.map((page) => (
        <NavBarButton key={page.name} background="transparent">
          <LoginPageLink to={page.source}>{page.name}</LoginPageLink>
        </NavBarButton>
      ))}
    </LoginNavBarButtonContainer>
  );
};

export default LoginPages;
