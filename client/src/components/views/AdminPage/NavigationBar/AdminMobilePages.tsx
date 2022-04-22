import React from "react";
import {
  NavBarButton,
  NavBarButtonContainerMobile,
  PageLink,
} from "../../NavigationBar/MainNavigationBar/NavigationBar.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";

const AdminMobliePages = () => {
  const pages = [
    { source: "/admin/users", icon: "UsersVector.svg", aria: "Users" },
    {
      source: "/admin/offers/users-offers",
      icon: "OffersVector.svg",
      aria: "Users offers",
    },
    {
      source: "/admin/settings",
      icon: "UserVector.svg",
      aria: "profile setting",
    },
  ];
  return (
    <NavBarButtonContainerMobile>
      {pages.map((page) => (
        <NavBarButton key={page.source}>
          <PageLink to={page.source}>
            <Icon src={page.icon} aria-label={page.aria} marginRight={10} />
          </PageLink>{" "}
        </NavBarButton>
      ))}
    </NavBarButtonContainerMobile>
  );
};

export default AdminMobliePages;
