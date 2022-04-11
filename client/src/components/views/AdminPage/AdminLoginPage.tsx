import React from "react";
import {
  NavBar,
  NavigationBarButton,
  TitleButton,
} from "../../ui/NavigationBar/NavigationBar";
import { Button } from "../../ui/Button/Button.style";
import { ButtonWithImage, Icon } from "../../ui/ButtonWithIcon/ButtonWithIcon";

const AdminLoginPage = () => {
  return (
    <div>
      <NavBar />

      <ButtonWithImage
        content="add photos"
        src="AddVector.svg"
      ></ButtonWithImage>
    </div>
  );
};

export default AdminLoginPage;
