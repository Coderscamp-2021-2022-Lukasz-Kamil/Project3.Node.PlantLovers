import React from "react";
import {
  NavBar,
  StartPageLink,
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
        hoverBackground="transparent"
      >
        <StartPageLink to="/"> Plant Lovers </StartPageLink>
      </TitleButton>
      <AdminPages />
      <AdminMobliePages />
    </NavBar>
  );
};
