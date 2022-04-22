import React from "react";
import {
  NavBar,
  TitleButton,
} from "../../NavigationBar/MainNavigationBar/NavigationBar.style";
import AdminMobliePages from "./AdminMobilePages";
import AdminPages from "./AdminPages";

export const AdminNavigationBar = () => {
  return (
    <NavBar>
      <TitleButton>Plant Lovers</TitleButton>
      <AdminPages />
      <AdminMobliePages />
    </NavBar>
  );
};
