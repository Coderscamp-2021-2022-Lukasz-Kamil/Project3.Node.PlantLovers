import React from "react";
import { NavBar, TitleButton, StartPageLink } from "./NavigationBar.style";
import Pages from "./Pages";
import PagesOnMobile from "./PageMobile";

export const NavigationBar = () => {
  return (
    <NavBar>
      <TitleButton>
        <StartPageLink to="/"> Plant Lovers </StartPageLink>
      </TitleButton>
      <Pages />
      <PagesOnMobile />
    </NavBar>
  );
};
