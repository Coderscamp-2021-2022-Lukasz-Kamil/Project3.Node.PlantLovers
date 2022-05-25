import React from "react";
import styled from "styled-components";
import UserData from "../ProfilePage/ProfilePage/UserData";
import UserPassword from "../ProfilePage/ProfilePage/UserPassword";
import AdminLogout from "./AdminLogoutPage";
import { ProfilePageContainer } from "../ProfilePage/ProfilePage/ProfilePage";

const AdminData = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 576px) {
    font-size: 20px;
    margin: 0 auto;
  }
`;

const AdminSettings = () => {
  return (
    <div>
      <AdminData>Admin Profile Edit</AdminData>
      <ProfilePageContainer>
        <UserData />
        <UserPassword />
      </ProfilePageContainer>
      <AdminLogout />
    </div>
  );
};

export default AdminSettings;
