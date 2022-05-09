import React from "react";
import { useParams } from "react-router-dom";
import useFetchData, { BASE_URL } from "../../../hooks/UseFetch";
import User from "../../../shared/intefaces/user.interface";

const AccountActivation = () => {
  const { userId, token } = useParams<{ userId: string; token: string }>();
  const { response, error, loading } = useFetchData<User>({

    url: BASE_URL + `/users/activate/${userId}`,
    method: "PUT",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      token: token as string,
    },
  });

  return (
    <ActivationContainer>
      <ActivationLogo>Plant Lovers</ActivationLogo>
      <ActivationCard>
        {response}
        {error}
      </ActivationCard>
    </ActivationContainer>
  );
};

export default AccountActivation;
