import React from "react";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import UserData from "./UserData";
import UserPassword from "./UserPassword";
import LogOut from "../LogOut";

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
      <LogOut />
    </div>
  );
};

export default UserPage;
