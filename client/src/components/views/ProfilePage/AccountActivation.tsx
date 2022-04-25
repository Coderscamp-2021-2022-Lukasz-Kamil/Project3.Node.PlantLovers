import React from "react";
import { useParams } from "react-router-dom";
import useFetchData, { BASE_URL } from "../../../hooks/UseFetch";

const AccountActivation = () => {
  const { userId, token } = useParams<{ userId: string; token: string }>();
  const { response, error, loading } = useFetchData({
    url: BASE_URL + `/users/activate/${userId}`,
    method: "PUT",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      token: token as string,
    },
  });
  if (loading) {
    return <></>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return <div>{response}</div>;
};

export default AccountActivation;
