import React from "react";
import {
  NavBarButtonContainerMobile,
  PageLink,
  NavBarButton,
} from "./NavigationBar.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";

const PagesOnMobile = () => {
  const pages = [
    { source: "/plants", icon: "plantVector.svg", aria: "plants" },
    { source: "/add-offer", icon: "addVector.svg", aria: "add offer" },
    { source: "/user/", icon: "userVector.svg", aria: "user profile" },
  ];
  return (
    <NavBarButtonContainerMobile>
      {pages.map((page) => (
        <NavBarButton key={page.source}>
          <PageLink to={page.source}>
            <Icon src={page.icon} aria-label={page.aria} marginRight={10} />
          </PageLink>
        </NavBarButton>
      ))}
    </NavBarButtonContainerMobile>
  );
};

export default PagesOnMobile;
