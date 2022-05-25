import React from "react";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../../../hooks/UseFetch";
import styled from "styled-components";
import { Button } from "../../../ui/Button/Button.style";
import { InputUser } from "../../../ui/Input/Input.style";
import { Typography } from "../../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { editProfileSchema } from "../../../../shared/inputHandlers/EditProfileInputHandler";
import { ErrorCard } from "../LoginPage";

export const ProfilePageContainerColumn = styled(FlexWrapper)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 0;
`;
export const ProfilePageContainerColumnItem = styled.div`
  font-size: 24px;
  width: 85%;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const ProfilePageTypography = styled(Typography)`
  margin-bottom: 10px;
`;

export const InputUserData = styled(InputUser)`
  margin-top: 15px;
`;

const UserData = () => {
  const [userId] = useCookies(["user-id"]);
  const [token] = useCookies(["token"]);

  const editProfileFormHandler = useFormik({
    initialValues: {
      email: "",
      phone: "",
      city: "",
    },
    validationSchema: editProfileSchema,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  const onEditProfileHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    editProfileFormHandler.handleSubmit;

    await axios({
      method: "PUT",
      url: BASE_URL + `/users/${userId["user-id"]}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
      data: {
        email: editProfileFormHandler.values.email || undefined,
        phoneNumber: editProfileFormHandler.values.phone || undefined,
        city: editProfileFormHandler.values.city || undefined,
      },
    })
      .then((response) => {
        editProfileFormHandler.resetForm();
        return toast.success("Data changed!");
      })
      .catch((err) => {
        if (err.response.data) {
          return toast.error(`${err.response.data}`);
        }
        return toast.error("Incorrect data, check your credentials");
      });
  };

  return (
    <ProfilePageContainerColumn>
      <form onSubmit={onEditProfileHandler}>
        <ProfilePageContainerColumnItem>
          E-mail
          <InputUserData
            fontSizeDesktop="md"
            width="100%"
            type="email"
            id="email"
            value={editProfileFormHandler.values.email}
            onChange={editProfileFormHandler.handleChange}
            onBlur={editProfileFormHandler.handleBlur}
          />
          {editProfileFormHandler.errors.email ? (
            <ErrorCard>{editProfileFormHandler.errors.email}</ErrorCard>
          ) : null}
        </ProfilePageContainerColumnItem>
        <ProfilePageContainerColumnItem>
          Phone Number
          <InputUserData
            fontSizeDesktop="md"
            width="100%"
            type="text"
            id="phone"
            value={editProfileFormHandler.values.phone}
            onChange={editProfileFormHandler.handleChange}
            onBlur={editProfileFormHandler.handleBlur}
          />
          {editProfileFormHandler.errors.phone ? (
            <ErrorCard>{editProfileFormHandler.errors.phone}</ErrorCard>
          ) : null}
        </ProfilePageContainerColumnItem>
        <ProfilePageContainerColumnItem>
          City
          <InputUserData
            fontSizeDesktop="md"
            width="100%"
            type="text"
            id="city"
            value={editProfileFormHandler.values.city}
            onChange={editProfileFormHandler.handleChange}
            onBlur={editProfileFormHandler.handleBlur}
          />
          {editProfileFormHandler.errors.city ? (
            <ErrorCard>{editProfileFormHandler.errors.city}</ErrorCard>
          ) : null}
        </ProfilePageContainerColumnItem>
        <Button type="submit">Save changes</Button>
      </form>
    </ProfilePageContainerColumn>
  );
};

export default UserData;
