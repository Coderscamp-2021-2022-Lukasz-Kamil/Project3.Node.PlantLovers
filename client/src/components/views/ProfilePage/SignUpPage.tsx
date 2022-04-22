import React from "react";
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

const SignUpCard = styled(Card)`
  width: 440px;
  max-height: 570px;
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

export const SignUpinput = styled(Input)`
  margin: 15px 20px;
  width: 410px;
  

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

export const SignUpButton = styled(Button)`
  margin-top: 50px;
  width: 410px;
  text-transform: uppercase;

  @media (max-width: 576px) {
    margin-top: 20px;
    width: 300px;
  }
`;

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Logo>Plant Lovers</Logo>
      <SignUpCard>
        <SignUpinput />
        <SignUpinput />
        <SignUpinput />
        <SignUpinput />
        <SignUpinput />
        <SignUpButton> sign up </SignUpButton>
      </SignUpCard>
    </SignUpContainer>
  )
};

export default SignUpPage;
