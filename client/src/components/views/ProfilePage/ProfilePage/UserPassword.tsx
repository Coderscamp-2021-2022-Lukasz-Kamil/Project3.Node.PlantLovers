import React from "react";
import { Button } from "../../../ui/Button/Button.style";
import { Input } from "../../../ui/Input/Input.style";
import {
  InputUserData,
  ProfilePageContainerColumn,
  ProfilePageContainerColumnItem,
  ProfilePageTypography,
} from "./UserData";

import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../../../hooks/UseFetch";
import { ErrorCard } from "../LoginPage";
import { useParams } from "react-router-dom";
import { editCredentialsSchema } from "../../../../shared/inputHandlers/EditCredentialsInputHandler";

const UserPassword = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userId, setId, removeUserId] = useCookies(["user-id"]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken, removeToken] = useCookies(["token"]);

  const editCredentialsFormHandler = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: editCredentialsSchema,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/user/login");
  };

  const onEditCredentialsHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    editCredentialsFormHandler.handleSubmit;

    await axios({
      method: "PUT",
      url: BASE_URL + `/users/${userId["user-id"]}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
      data: {
        currentPassword: editCredentialsFormHandler.values.currentPassword,
        newPassword: editCredentialsFormHandler.values.newPassword,
        confirmPassword: editCredentialsFormHandler.values.confirmPassword,
      },
    })
      .then((response) => {
        removeUserId("user-id");
        removeToken("token");
        navigateTo();
        return toast.success("Password changed!");
      })
      .catch(() => {
        return toast.error("Incorrect data, check your credentials");
      });
  };

  const noFieldsAreTouched = () => {
    return (
      !editCredentialsFormHandler.touched.currentPassword &&
      !editCredentialsFormHandler.touched.newPassword &&
      !editCredentialsFormHandler.touched.confirmPassword
    );
  };

  const allFieldsAreTouched = () => {
    return (
      editCredentialsFormHandler.touched.currentPassword &&
      editCredentialsFormHandler.touched.newPassword &&
      editCredentialsFormHandler.touched.confirmPassword
    );
  };

  const anyFieldInputIsInvalid = () => {
    return (
      !!editCredentialsFormHandler.errors.currentPassword ||
      !!editCredentialsFormHandler.errors.newPassword ||
      !!editCredentialsFormHandler.errors.confirmPassword
    );
  };

  const isInputInvalid = () => {
    return (
      noFieldsAreTouched() ||
      (allFieldsAreTouched() && anyFieldInputIsInvalid())
    );
  };

  return (
    <ProfilePageContainerColumn>
      <form onSubmit={onEditCredentialsHandler}>
        <ProfilePageContainerColumnItem>
          Current Password
          <InputUserData
            fontSizeDesktop="md"
            width="100%"
            type="password"
            id="currentPassword"
            value={editCredentialsFormHandler.values.currentPassword}
            onChange={editCredentialsFormHandler.handleChange}
            onBlur={editCredentialsFormHandler.handleBlur}
          />
          {editCredentialsFormHandler.errors.currentPassword ? (
            <ErrorCard>
              {editCredentialsFormHandler.errors.currentPassword}
            </ErrorCard>
          ) : null}
        </ProfilePageContainerColumnItem>
        <ProfilePageContainerColumnItem>
          New Password
          <InputUserData
            fontSizeDesktop="md"
            width="100%"
            type="password"
            id="newPassword"
            value={editCredentialsFormHandler.values.newPassword}
            onChange={editCredentialsFormHandler.handleChange}
            onBlur={editCredentialsFormHandler.handleBlur}
          />
          {editCredentialsFormHandler.errors.newPassword ? (
            <ErrorCard>
              {editCredentialsFormHandler.errors.newPassword}
            </ErrorCard>
          ) : null}
        </ProfilePageContainerColumnItem>
        <ProfilePageContainerColumnItem>
          Confirm Password
          <InputUserData
            fontSizeDesktop="md"
            width="100%"
            type="password"
            id="confirmPassword"
            value={editCredentialsFormHandler.values.confirmPassword}
            onChange={editCredentialsFormHandler.handleChange}
            onBlur={editCredentialsFormHandler.handleBlur}
          />
          {editCredentialsFormHandler.errors.confirmPassword ? (
            <ErrorCard>
              {editCredentialsFormHandler.errors.confirmPassword}
            </ErrorCard>
          ) : null}
        </ProfilePageContainerColumnItem>
        <Button type="submit" disabled={isInputInvalid()}>
          Save changes
        </Button>
      </form>
    </ProfilePageContainerColumn>
  );
};

export default UserPassword;
