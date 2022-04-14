import React from "react";
import {
  NavBarButtonContainerMobile,
  PageLink,
  NavBarButton,
} from "./NavigationBar.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";

const PagesOnMobile = () => {
  const pages = [
    { source: "/plants", icon: "plantVector.svg", alt: "plants button" },
    { source: "/add-offer", icon: "addVector.svg", alt: "add offer button" },
    { source: "/user", icon: "userVector.svg", alt: "user button" },
  ];
  return (
    <NavBarButtonContainerMobile>
      {pages.map((page) => (
        <NavBarButton key={page.source}>
          <PageLink to={page.source}>
            <Icon src={page.icon} alt={page.alt} />
          </PageLink>
        </NavBarButton>
      ))}
    </NavBarButtonContainerMobile>
  );
};

export default PagesOnMobile;
