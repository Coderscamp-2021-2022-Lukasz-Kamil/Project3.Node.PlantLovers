import React from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LogOutButton } from "../../ui/ButtonWithIcon/ButtonWithIcon";
import LogoutVector from "../../../assets/LogoutVector.svg";

const LogOut = () => {
  const [_, __, removeCookie] = useCookies();
  const navigate = useNavigate();
  const logout = () => {
    try {
      removeCookie("user-id");
      removeCookie("token");
      navigate("/user/login");
      return toast.success("You have been logged out!");
    } catch (error) {
      return toast.error("Something went wrong");
    }
  };
  return <LogOutButton src={LogoutVector} content="Log out" onClick={logout} />;
};

export default LogOut;
