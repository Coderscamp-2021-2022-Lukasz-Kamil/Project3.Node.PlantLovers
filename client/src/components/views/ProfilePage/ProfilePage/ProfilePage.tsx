import React from "react";
import styled from "styled-components";
import { LogOutButton } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import UserData from "./UserData";
import UserPassword from "./UserPassword";
import LogoutVector from "../../../../assets/LogoutVector.svg";

const ProfilePageContainer = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;

const UserPage = () => {
  return (
    <div>
      <ProfilePageContainer>
        <UserData />
        <UserPassword />
      </ProfilePageContainer>
      <LogOutButton src={LogoutVector} content="Log out" />
    </div>
  );
};

export default UserPage;
