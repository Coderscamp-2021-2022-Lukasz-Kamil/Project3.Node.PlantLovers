import React from "react";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import {
  NavBarButton,
  NavBarButtonContainer,
  PageLink,
} from "./NavigationBar.style";

const Pages = () => {
  const pages = [
    { source: "/plants", name: "Plants" },
    { source: "/add-offer", name: "Add Offer" },
  ];
  return (
    <NavBarButtonContainer>
      {pages.map((page) => (
        <NavBarButton key={page.name}>
          <PageLink to={page.source}>{page.name}</PageLink>
        </NavBarButton>
      ))}
      <NavBarButton>
        <PageLink to="/user/">
          <Icon
            src="UserVector.svg"
            aria-label="User profile"
            marginRight={10}
          />
        </PageLink>
      </NavBarButton>
    </NavBarButtonContainer>
  );
};

export default Pages;
