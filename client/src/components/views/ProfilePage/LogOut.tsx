import React from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LogOutButton } from "../../ui/ButtonWithIcon/ButtonWithIcon";
import LogoutVector from "../../../assets/LogoutVector.svg";

const LogOut = () => {
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
  return <LogOutButton src={LogoutVector} content="Log out" onClick={logout} />;
};

export default LogOut;
