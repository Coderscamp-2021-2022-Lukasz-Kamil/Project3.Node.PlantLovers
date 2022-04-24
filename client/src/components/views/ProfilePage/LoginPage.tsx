import React from "react";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useNavigate } from "react-router";
import { signInSchema } from "../../../shared/inputHandlers/LoginInputHandler";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

const LoginPage = () => {
  const [_, setUserIdCookie] = useCookies(["user-id"]);
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
        setUserIdCookie("user-id", response.data.id);
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
    <div>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
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
            <input
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
          <button type="submit" disabled={isInputInvalid()}>
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
