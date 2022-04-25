import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/UseFetch";

const AccountActivation = () => {
  const { userId, token } = useParams<{ userId: string; token: string }>();

  const { response } = useFetchData({
    url: `/users/activate/${userId}`,
    method: "PUT",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      token: token as string,
    },
  });
  return <div>{response}</div>;
};

export default AccountActivation;
