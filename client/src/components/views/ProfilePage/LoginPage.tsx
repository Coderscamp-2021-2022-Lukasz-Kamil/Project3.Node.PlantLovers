import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useNavigate } from "react-router";
import { signInSchema } from "../../../shared/inputHandlers/LoginInputHandler";
import { LandingPageContainer } from "../LandingPage/LandingPage";
import { Card } from "../../ui/Card/Card.style";
import background from "../../../assets/LoginPagePhoto.svg";
import { Logo, SignUpButton } from "./SignUpPage";
import { InputUser } from "../../ui/Input/Input.style";

export const LoginContainer = styled(LandingPageContainer)`
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
  justify-content: center;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};

  @media (max-width: 576px) {
    margin: 0 auto;
    padding: 0;
    width: 310px;
    height: 410px;
    background: transparent;
    box-shadow: none;
  }

const ErrorCard = styled.div`
  width: 280px;
  font-size: ${({theme})=> theme.size.desktop.xs}px;
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const LoginButton = styled(SignUpButton)`
  margin: 0 auto;
`;

const LoginPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUserIdCookie] = useCookies(["user-id"]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setTokenCookie] = useCookies(["token"]);

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
      .then((response) => {
        console.log(response);
        setUserIdCookie("user-id", response.data.id);
        setTokenCookie("token", response.headers.token);
        navigateTo();
      })
      .catch((err) => {
        if (err.response.data) {
          return toast.error(`${err.response.data}`);
        }
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
    <LoginContainer>
      <Logo fontWeight="regular"> Plant Lovers </Logo>
      <LoginCard>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="email"></label>
            <InputUser
              type="email"
              id="email"
              placeholder="e-mail"
              value={signInFormHandler.values.email}
              onChange={signInFormHandler.handleChange}
              onBlur={signInFormHandler.handleBlur}
            />
            {signInFormHandler.errors.email ? (
              <ErrorCard>{signInFormHandler.errors.email}</ErrorCard>
            ) : null}
          </div>
          <div>
            <label htmlFor="password"></label>
            <InputUser
              type="password"
              id="password"
              placeholder="password"
              value={signInFormHandler.values.password}
              onChange={signInFormHandler.handleChange}
              onBlur={signInFormHandler.handleBlur}
            />
            {signInFormHandler.errors.password ? (
              <ErrorCard>{signInFormHandler.errors.password}</ErrorCard>
            ) : null}
          </div>
          <LoginButton type="submit" disabled={isInputInvalid()}>
            Login
          </LoginButton>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
