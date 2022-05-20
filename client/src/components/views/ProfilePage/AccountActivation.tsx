import React from "react";
import { useParams } from "react-router-dom";
import useFetchData, { BASE_URL } from "../../../hooks/UseFetch";
import User from "../../../shared/intefaces/user.interface";
import styled from "styled-components";
import { SignUpCard, SignUpContainer, Logo } from "./SignUpPage";

export const ActivationContainer = styled(SignUpContainer)`
  justify-content: flex-start;
`;

export const ActivationCard = styled(SignUpCard)`
  justify-content: center;
  max-height: 120px;
`;

export const ActivationLogo = styled(Logo)`
  margin-top: 2rem;
`;

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
