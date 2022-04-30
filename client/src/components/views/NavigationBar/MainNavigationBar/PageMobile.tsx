import React from "react";
import {
  NavBarButtonContainerMobile,
  PageLink,
  NavBarButton,
} from "./NavigationBar.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import PlantVecor from "../../../../assets/PlantVector.svg";
import OfferVecor from "../../../../assets/AddVector.svg";
import UserVecor from "../../../../assets/UserVector.svg";

const PagesOnMobile = () => {
  const pages = [
    { source: "/plants", icon: PlantVecor, aria: "plants" },
    { source: "/add-offer", icon: OfferVecor, aria: "add offer" },
    { source: "/user/", icon: UserVecor, aria: "user profile" },
  ];
  return (
    <NavBarButtonContainerMobile>
      {pages.map((page) => (
        <NavBarButton
          key={page.source}
          background="transparent"
          mobileWidth="auto"
          padding="0"
          hoverBackground="transparent"
        >
          <PageLink to={page.source}>
            <Icon src={page.icon} aria-label={page.aria} />
          </PageLink>
        </NavBarButton>
      ))}
    </NavBarButtonContainerMobile>
  );
};

export default PagesOnMobile;
