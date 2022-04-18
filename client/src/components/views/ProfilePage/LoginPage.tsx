import React from "react";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useNavigate } from "react-router";
import { signInSchema } from "../../../shared/inputHandlers/LoginInputHandler";
import { useFormik } from "formik";
import axios from "axios";

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
  const navigation = () => {
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
    }).then((response) => {
      const correctResponse = response.status == 200;
      if (!correctResponse) {
        throw Error("Incorrect response, check credentials");
      } else {
        navigation();
      }
    });
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
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
