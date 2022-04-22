import React from "react";
// import useFetchData from "../../../hooks/UseFetch";
import { Card } from "../../ui/Card/Card.style";
import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.style";

const LandingPageContainer = styled.div`
  background-image: url("LandingPagePhoto.svg");
  background-size: cover;
  background-position: 100% 0;
  display: flex;
  align-items: center;
  min-height: 90vh;

  @media (max-width: 952px) {
    background-position: 80% 0;
  }

  @media (max-width: 576px) {
    align-items: baseline;
  }
`;

const LandingPageCard = styled(Card)`
  position: relative;
  left: 10vw;
  border-radius: 20px;
  height: auto;
  text-align: center;

  @media (max-width: 1100px) {
    left: 5vw;
    width: ${({ width }) => (width ? width : 50)}vw;
  }
  @media (max-width: 952px) {
    background-color: ${({ theme, color }) =>
      color ? theme.colors.card[color] : theme.colors.card.secondary};
  }

  @media (max-width: 576px) {
    margin-top: 30vh;
  }

  @media (max-width: 420px) {
    left: 5vw;
    margin-top: 15vh;
    width: ${({ width }) => (width ? width : 60)}vw;
  }

  @media (max-height: 700px) {
    margin: 50px 0;
  }
`;

const LandingPageCardText = styled(Typography)`
  padding-bottom: 20px;

  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.size.desktop.mds}px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const LandingPageCardTextMobile = styled(Typography)`
  display: none;

  @media (max-width: 576px) {
    display: block;
  }
`;

const LandingPageCardHeading = styled(Typography)`
  margin: 10px 0 20px;

  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.size.desktop.lg}px;
  }

  @media (max-width: 576px) {
    margin: 0 0 20px;
    font-size: ${({ theme }) => theme.size.mobile.lg}px;
  }
`;

const LandingPage = () => {
  // const { response, error } = useFetchData({
  //   url: "/offers",
  //   headers: {
  //     accept: "*/*",
  //   },
  // });

  // const offers = response;
  // console.log(offers);

  return (
    <LandingPageContainer>
      <LandingPageCard>
        <LandingPageCardHeading as="h1" fontSize="xxl" fontWeight="bold">
          Welcome to the Plant Lovers site!
        </LandingPageCardHeading>
        <LandingPageCardText fontSize="md">
          Do you love your plants and are you worried about how they will do
          without you? Are you changing your place of residence, are you going
          away for a long time and you have nothing to do with them? Or maybe
          you got a plant from a distant aunt, and not a single flowerpot will
          fit in your apartment? Put her up for adoption! So that she could get
          a chance for a new house and not have to end up in the garbage can.
        </LandingPageCardText>
        <LandingPageCardTextMobile fontSizeMobile="mdl">
          Adopt or give the plant up for adoption and give it a new life!
        </LandingPageCardTextMobile>
      </LandingPageCard>
    </LandingPageContainer>
  );
};

export default LandingPage;
