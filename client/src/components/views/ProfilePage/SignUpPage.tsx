import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useNavigate } from "react-router";
import { signUpSchema } from "../../../shared/inputHandlers/SignUpInputHandler";
import { LandingPageContainer } from "../LandingPage/LandingPage";
import background from "../../../assets/LoginPagePhoto.svg";
import { Card } from "../../ui/Card/Card.style";
import { InputUser } from "../../ui/Input/Input.style";
import { Button } from "../../ui/Button/Button.style";

export const SignUpContainer = styled(LandingPageContainer)`
  background-image: url(${background});
  flex-flow: column;
  justify-content: center;
`;

const SignUpCard = styled(Card)`
  width: 440px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};

  @media (max-width: 576px) {
    margin: 0 auto;
    padding: 0;
    width: 310px;
    height: 410px;
    background: transparent;
    box-shadow: none;
  }
`;

export const Logo = styled.h4`
  font-family: "plants_lovin";
  font-size: clamp(3.5rem, 2.6rem + 4.5vw, 8rem);
  margin: 0 auto;
`;

export const SignUpButton = styled(Button)`
  margin-top: 20px;
  width: 300px;
  text-transform: uppercase;

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;

const ErrorCard = styled.div`
  width: 280px;
  font-size: ${({ theme }) => theme.size.desktop.xs}px;
  margin: 0 auto;
  margin-bottom: 5px;
`;

const SignUpPage = () => {
  const [_, setUserIdCookie] = useCookies(["user-id"]);
  const signUpFormHandler = useFormik({
    initialValues: {
      email: "",
      phone: "",
      city: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/user/login");
  };

  const onSignupHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUpFormHandler.handleSubmit;

    await axios({
      method: "post",
      url: BASE_URL + "/users/register",
      data: {
        email: signUpFormHandler.values.email,
        phoneNumber: signUpFormHandler.values.phone || undefined,
        city: signUpFormHandler.values.city || undefined,
        password: signUpFormHandler.values.password,
        confirmPassword: signUpFormHandler.values.confirmPassword,
      },
    })
      .then((response) => {
        setUserIdCookie("user-id", response.data.id);
        navigateTo();
      })
      .catch(() => {
        return toast.error("Incorrect data, check your credentials");
      });
  };

  const noFieldsAreTouched = () => {
    return (
      !signUpFormHandler.touched.email &&
      !signUpFormHandler.touched.phone &&
      !signUpFormHandler.touched.city &&
      !signUpFormHandler.touched.password &&
      !signUpFormHandler.touched.confirmPassword
    );
  };

  const allFieldsAreTouched = () => {
    return (
      signUpFormHandler.touched.email &&
      signUpFormHandler.touched.phone &&
      signUpFormHandler.touched.city &&
      signUpFormHandler.touched.password &&
      signUpFormHandler.touched.confirmPassword
    );
  };

  const anyFieldInputIsInvalid = () => {
    return (
      !!signUpFormHandler.errors.email ||
      !!signUpFormHandler.errors.phone ||
      !!signUpFormHandler.errors.city ||
      !!signUpFormHandler.errors.password ||
      !!signUpFormHandler.errors.confirmPassword
    );
  };

  const isInputInvalid = () => {
    return (
      noFieldsAreTouched() ||
      (allFieldsAreTouched() && anyFieldInputIsInvalid())
    );
  };

  return (
    <SignUpContainer>
      <Logo>Plant Lovers</Logo>
      <SignUpCard>
        <form onSubmit={onSignupHandler}>
          <div>
            <label htmlFor="email"></label>
            <InputUser
              type="email"
              id="email"
              placeholder="e-mail"
              value={signUpFormHandler.values.email}
              onChange={signUpFormHandler.handleChange}
              onBlur={signUpFormHandler.handleBlur}
            />
            {signUpFormHandler.errors.email ? (
              <ErrorCard>{signUpFormHandler.errors.email}</ErrorCard>
            ) : null}
          </div>
          <div>
            <label htmlFor="phone"></label>
            <InputUser
              type="text"
              id="phone"
              placeholder="phone"
              value={signUpFormHandler.values.phone}
              onChange={signUpFormHandler.handleChange}
              onBlur={signUpFormHandler.handleBlur}
            />
            {signUpFormHandler.errors.phone ? (
              <ErrorCard>{signUpFormHandler.errors.phone}</ErrorCard>
            ) : null}
          </div>
          <div>
            <label htmlFor="city"></label>
            <InputUser
              type="text"
              id="city"
              placeholder="city"
              value={signUpFormHandler.values.city}
              onChange={signUpFormHandler.handleChange}
              onBlur={signUpFormHandler.handleBlur}
            />
            {signUpFormHandler.errors.city ? (
              <ErrorCard>{signUpFormHandler.errors.city}</ErrorCard>
            ) : null}
          </div>
          <div>
            <label htmlFor="password"></label>
            <InputUser
              type="password"
              id="password"
              placeholder="password"
              value={signUpFormHandler.values.password}
              onChange={signUpFormHandler.handleChange}
              onBlur={signUpFormHandler.handleBlur}
            />
            {signUpFormHandler.errors.password ? (
              <ErrorCard>{signUpFormHandler.errors.password}</ErrorCard>
            ) : null}
          </div>
          <div>
            <label htmlFor="confirmPassword"></label>
            <InputUser
              type="password"
              id="confirmPassword"
              placeholder="confirmPassword"
              value={signUpFormHandler.values.confirmPassword}
              onChange={signUpFormHandler.handleChange}
              onBlur={signUpFormHandler.handleBlur}
            />
            {signUpFormHandler.errors.confirmPassword ? (
              <ErrorCard>{signUpFormHandler.errors.confirmPassword}</ErrorCard>
            ) : null}
          </div>
          <SignUpButton type="submit" disabled={isInputInvalid()}>
            {" "}
            sign up{" "}
          </SignUpButton>
        </form>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUpPage;
