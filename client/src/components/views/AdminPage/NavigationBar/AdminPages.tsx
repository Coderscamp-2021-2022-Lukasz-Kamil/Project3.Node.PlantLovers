import React from "react";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import {
  NavBarButton,
  NavBarButtonContainer,
  PageLink,
} from "../../NavigationBar/MainNavigationBar/NavigationBar.style";
import UserVector from "../../../../assets/UserVector.svg";

const AdminPages = () => {
  const pages = [
    { source: "/admin/users", name: "Users" },
    { source: "/admin/offers/users-offers", name: "Offers" },
  ];
  return (
    <NavBarButtonContainer>
      {pages.map((page) => (
        <NavBarButton key={page.name}>
          <PageLink to={page.source}>{page.name}</PageLink>{" "}
        </NavBarButton>
      ))}
      <NavBarButton>
        <PageLink to="/admin/settings">
          <Icon src={UserVector} aria-label="User profile" marginRight={10} />
        </PageLink>
      </NavBarButton>
    </NavBarButtonContainer>
  );
};

export default AdminPages;
