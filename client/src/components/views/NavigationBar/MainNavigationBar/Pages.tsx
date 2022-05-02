import React from "react";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import {
  NavBarButton,
  NavBarButtonContainer,
  PageLink,
} from "./NavigationBar.style";
import UserVecor from "../../../../assets/UserVector.svg";

const Pages = () => {
  const pages = [
    { source: "/plants", name: "Plants" },
    { source: "/add-offer", name: "Add Offer" },
  ];
  return (
    <NavBarButtonContainer>
      {pages.map((page) => (
        <NavBarButton
          key={page.name}
          background="transparent"
          width="auto"
          padding="0"
          hoverBackground="transparent"
        >
          <PageLink to={page.source}>{page.name}</PageLink>
        </NavBarButton>
      ))}
      <NavBarButton
        background="transparent"
        width="auto"
        hoverBackground="transparent"
      >
        <PageLink to="/user/">
          <Icon src={UserVecor} aria-label="User profile" />
        </PageLink>
      </NavBarButton>
    </NavBarButtonContainer>
  );
};

export default Pages;
