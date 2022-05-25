import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  LoginContainer,
  LoginCard,
  LoginButton,
  ErrorCard,
} from "../ProfilePage/LoginPage";
import { InputUser } from "../../ui/Input/Input.style";
import { Logo } from "../ProfilePage/SignUpPage";
import { signInSchema } from "../../../shared/inputHandlers/LoginInputHandler";

const AdminLoginContainer = styled(LoginContainer)`
  height: 100vh;
`;

const Flower = styled.span`
  font-size: 30px;
`;

const AdminLoginPage = () => {
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
    navigate("/admin/users");
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
    <AdminLoginContainer>
      <Logo fontWeight="regular">
        {" "}
        Welcome Admin<Flower> 🌼</Flower>
      </Logo>
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
    </AdminLoginContainer>
  );
};

export default AdminLoginPage;
