import React from "react";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useNavigate } from "react-router";
import { signInSchema } from "../../../shared/inputHandlers/LoginInputHandler";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";
import { LandingPageContainer } from "../LandingPage/LandingPage";
import { Card } from "../../ui/Card/Card.style";
import { Input } from "../../ui/Input/Input.style";
import { Button } from "../../ui/Button/Button.style";
import background from "../../../assets/LoginPagePhoto.svg";

export const SignUpContainer = styled(LandingPageContainer)`
  background-image: url(${background});
  flex-flow: column;
  justify-content: center;
`;

const LoginCard = styled(Card)`
  margin: 0 auto;
  padding: 0;
  width: 440px;
  max-height: 370px;
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

export const LoginInput = styled(Input)`
  margin: 15px 20px;
  width: 300px;

  @media (max-width: 576px) {
    width: 300px;
    margin: 10px 0;
    background: inherit;
  }

`;

export const Logo = styled.h4`
  font-family: "plants_lovin";
  font-size: clamp(3.5rem, 2.6rem + 4.5vw, 8rem);
  margin: 0 auto;
`;

export const LoginButton = styled(Button)`
  margin: 0 auto;
  margin-top: 50px;
  width: 300px;
  text-transform: uppercase;

  @media (max-width: 576px) {
    margin-top: 20px;
    width: 300px;
  }
`;

const LoginPage = () => {
  const signInFormHandler = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/user/your-offers");
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInFormHandler.handleSubmit;

    await axios({
      method: "post",
      url: BASE_URL + "/users/login",
      data: {
        email: signInFormHandler.values.email,
        password: signInFormHandler.values.password,
      },
    })
      .then(() => {
        navigateTo();
      })
      .catch(() => {
        return toast.error("Incorrect data, check your credentials");
      });
  };

  const noFieldsAreTouched = () => {
    return (
      !signInFormHandler.touched.email && !signInFormHandler.touched.password
    );
  };

  const bothFieldsAreTouched = () => {
    return (
      signInFormHandler.touched.email && signInFormHandler.touched.password
    );
  };

  const anyFieldInputIsInvalid = () => {
    return (
      !!signInFormHandler.errors.email || !!signInFormHandler.errors.password
    );
  };

  const isInputInvalid = () => {
    return (
      noFieldsAreTouched() ||
      (bothFieldsAreTouched() && anyFieldInputIsInvalid())
    );
  };

  return (
    <SignUpContainer>
      <Logo> Plant Lovers </Logo>
      <LoginCard>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <LoginInput
              type="email"
              id="email"
              value={signInFormHandler.values.email}
              onChange={signInFormHandler.handleChange}
              onBlur={signInFormHandler.handleBlur}
            />
            {signInFormHandler.errors.email ? (
              <div>{signInFormHandler.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <LoginInput
              type="password"
              id="password"
              value={signInFormHandler.values.password}
              onChange={signInFormHandler.handleChange}
              onBlur={signInFormHandler.handleBlur}
            />
            {signInFormHandler.errors.password ? (
              <div>{signInFormHandler.errors.password}</div>
            ) : null}
          </div>
          <LoginButton type="submit" disabled={isInputInvalid()}>
            Login
          </LoginButton>
        </form>
      </LoginCard>
    </SignUpContainer>
  );
};

export default LoginPage;
