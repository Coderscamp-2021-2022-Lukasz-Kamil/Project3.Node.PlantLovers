import React from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [, removeCookie] = useCookies();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await removeCookie("user-id", { path: "/" });
      removeCookie("token", { path: "/" });
      navigate("/user/login");
      return toast.success("You have been logged out!");
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <ProfilePageContainer>
        <UserData />
        <UserPassword />
      </ProfilePageContainer>
      <LogOutButton src={LogoutVector} content="Log out" onClick={logout} />
    </div>
  );
};

export default UserPage;
