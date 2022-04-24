import React from "react";
import styled from "styled-components";
import { LandingPageContainer } from "../LandingPage/LandingPage";
import { Card } from "../../ui/Card/Card.style";
import { InputUser } from "../../ui/Input/Input.style";
import { Button } from "../../ui/Button/Button.style";
import background from "../../../assets/LoginPagePhoto.svg";
import { Typography } from "../../ui/Typography/Typography.style";

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

export const Logo = styled(Typography)`
  font-family: "plants_lovin";
  font-size: clamp(3.5rem, 2.6rem + 4.5vw, 8rem);
  margin: 0 auto;
`;

export const SignUpButton = styled(Button)`
  margin-top: 50px;
  width: 300px;
  text-transform: uppercase;

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Logo fontWeight="regular">Plant Lovers</Logo>
      <SignUpCard>
        <InputUser type="email" placeholder="e-mail" />
        <InputUser type="text" placeholder="phone" />
        <InputUser type="text" placeholder="city" />
        <InputUser type="password" placeholder="password" />
        <InputUser type="password" placeholder="confirm password" />
        <SignUpButton> sign up </SignUpButton>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUpPage;
