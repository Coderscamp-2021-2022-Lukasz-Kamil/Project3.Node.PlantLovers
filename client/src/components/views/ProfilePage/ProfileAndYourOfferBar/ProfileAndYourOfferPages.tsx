import React from "react";
import styled from "styled-components";
import {
  LoginNavBarButtonContainer,
  LoginPageLink,
} from "../../NavigationBar/LoginNavigationBar/LoginNavigationBar.style";
import { NavBarButton } from "../../NavigationBar/MainNavigationBar/NavigationBar.style";

const ProfileAndYourOfferBarButtonContainer = styled(
  LoginNavBarButtonContainer
)`
  display: flex;
  justify-content: center;
  gap: 100px;

  @media (max-width: 579px) {
    gap: 50px;
  }
`;

export const ProfileAndYourOfferPages = () => {
  const pages = [
    { source: "/user/your-offers", name: "Your Offers" },
    { source: "/user/", name: "Your Profile" },
  ];
  return (
    <ProfileAndYourOfferBarButtonContainer>
      {pages.map((page) => (
        <NavBarButton
          key={page.name}
          background="transparent"
          padding="0"
          hoverBackground="transparent"
        >
          <LoginPageLink to={page.source}>{page.name}</LoginPageLink>
        </NavBarButton>
      ))}
    </ProfileAndYourOfferBarButtonContainer>
  );
};
