import React from "react";
import {
  NavBarButton,
  NavBarButtonContainerMobile,
  PageLink,
} from "../../NavigationBar/MainNavigationBar/NavigationBar.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";

const AdminMobliePages = () => {
  const pages = [
    { source: "/admin/users", icon: "UsersVector.svg", alt: "users button" },
    {
      source: "/admin/offers/users-offers",
      icon: "OffersVector.svg",
      alt: "Offers button",
    },
    {
      source: "/admin/settings",
      icon: "UserVector.svg",
      alt: "profile setting button",
    },
  ];
  return (
    <NavBarButtonContainerMobile>
      {pages.map((page) => (
        <NavBarButton key={page.source}>
          <PageLink to={page.source}>
            <Icon src={page.icon} alt={page.alt} />
          </PageLink>{" "}
        </NavBarButton>
      ))}
    </NavBarButtonContainerMobile>
  );
};

export default AdminMobliePages;
