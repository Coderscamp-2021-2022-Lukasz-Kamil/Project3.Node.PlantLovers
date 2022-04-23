import React from "react";
import { LoginNavBar } from "../../NavigationBar/LoginNavigationBar/LoginNavigationBar.style";
import { ProfileAndYourOfferPages } from "./ProfileAndYourOfferPages";

export const ProfileAndYourOfferBar = () => {
  return (
    <LoginNavBar>
      <ProfileAndYourOfferPages />
    </LoginNavBar>
  );
};
