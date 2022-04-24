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
      <TitleButton
        fontWeight="regular"
        background="transparent"
        padding="0"
        color="textColor"
      >
        Plant Lovers
      </TitleButton>
      <AdminPages />
      <AdminMobliePages />
    </NavBar>
  );
};
