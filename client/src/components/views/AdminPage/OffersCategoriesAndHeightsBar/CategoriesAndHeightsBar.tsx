import React from "react";
import { LoginNavBar } from "../../NavigationBar/LoginNavigationBar/LoginNavigationBar.style";
import { OffersCategoriesAndHeightsPages } from "./OffersCategoriesAndHeightsPages";

export const CategoriesAndHeightsBar = () => {
  return (
    <>
      <LoginNavBar>
        <OffersCategoriesAndHeightsPages />
      </LoginNavBar>
    </>
  );
};
