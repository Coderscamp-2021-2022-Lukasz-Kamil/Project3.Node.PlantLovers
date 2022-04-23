import React from "react";
import { NavBar, TitleButton, StartPageLink } from "./NavigationBar.style";
import Pages from "./Pages";
import PagesOnMobile from "./PageMobile";

export const NavigationBar = () => {
  return (
    <NavBar>
      <TitleButton fontWeight="regular" background="transparent" padding="0">
        <StartPageLink to="/"> Plant Lovers </StartPageLink>
      </TitleButton>
      <Pages />
      <PagesOnMobile />
    </NavBar>
  );
};
