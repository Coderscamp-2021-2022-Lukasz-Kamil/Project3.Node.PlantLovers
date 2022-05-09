import React from "react";
import styled from "styled-components";
import {
  LoginNavBarButtonContainer,
  LoginPageLink,
} from "../../NavigationBar/LoginNavigationBar/LoginNavigationBar.style";
import { NavBarButton } from "../../NavigationBar/MainNavigationBar/NavigationBar.style";

const OffersCategoriesAndHeightsPagesButtonContainer = styled(
  LoginNavBarButtonContainer
)`
  display: flex;
  justify-content: center;
  gap: 100px;

  @media (max-width: 579px) {
    gap: 50px;
  }
`;

export const OffersCategoriesAndHeightsPages = () => {
  const pages = [
    { source: "/admin/offers/users-offers", name: "Users Offers" },
    { source: "/admin/offers/categories-and-heights", name: "Categories & Heights" },
  ];
  return (
    <OffersCategoriesAndHeightsPagesButtonContainer>
      {pages.map((page) => (
        <NavBarButton key={page.name} background="transparent" padding="0" width="auto" mobileWidth="auto">
          <LoginPageLink to={page.source}>{page.name}</LoginPageLink>
        </NavBarButton>
      ))}
    </OffersCategoriesAndHeightsPagesButtonContainer>
  );
};
