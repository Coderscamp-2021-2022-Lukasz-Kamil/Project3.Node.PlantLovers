import React from "react";
import styled from "styled-components";
import NotFoundPhoto from "../../../assets/NotFoundPhoto.svg";
import { LogOutButton } from "../../ui/ButtonWithIcon/ButtonWithIcon";
import { Typography } from "../../ui/Typography/Typography.style";
import LogoutVector from "../../../assets/LogoutVector.svg";
import { PageLink } from "../NavigationBar/MainNavigationBar/NavigationBar.style";

const NotFoundPicture = styled.div`
  background-image: url(${NotFoundPhoto});
  background-size: cover;
  height: 100vh;
  background-position: 60% 60%;
  filter: brightness(0.3);
`;

const SiteNameContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

const RedLine = styled.div`
  width: 220px;
  height: 14px;
  background-color: red;
  position: absolute;
  top: 91px;
  margin-left: 30px;

  @media (max-width: 850px) {
    width: 170px;
    top: 70px;
    height: 10px;
  }

  @media (max-width: 585px), (max-width: 950px) and (max-height: 450px) {
    width: 110px;
    top: 45px;
    height: 7px;
  }
`;

const SiteNameLeft = styled(Typography)`
  font-family: "plants_lovin";
  font-size: ${({ theme }) => theme.size.desktop.titleXXL}px;
  color: ${({ theme }) => theme.colors.common.backgroundcolor};

  @media (max-width: 850px) {
    font-size: ${({ theme }) => theme.size.desktop.titleXL}px;
  }

  @media (max-width: 585px), (max-width: 950px) and (max-height: 450px) {
    font-size: ${({ theme }) => theme.size.desktop.titleMd}px;
  }
`;
const SiteNameRight = styled(SiteNameLeft)`
  margin-left: 30px;
`;

const NotFoundTypography = styled(Typography)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.desktop.titleMd}px;
  color: ${({ theme }) => theme.colors.common.backgroundcolor};

  @media (max-width: 850px) {
    font-size: ${({ theme }) => theme.size.mobile.titleMd}px;
  }

  @media (max-width: 585px) {
    font-size: ${({ theme }) => theme.size.mobile.titleXXs}px;
    width: 200px;
  }

  @media (max-width: 950px) and (max-height: 450px) {
    font-size: ${({ theme }) => theme.size.mobile.titleXXs}px;
  }
`;
const NewSiteName = styled(NotFoundTypography)`
  position: absolute;
  top: 120px;
  transform: translate(0, 0);
  margin-top: 0;

  @media (max-width: 850px) {
    top: 105px;
    margin-left: 10px;
  }

  @media (max-width: 585px), (max-width: 950px) and (max-height: 450px) {
    top: 70px;
    margin-left: 13px;
    width: auto;
  }
`;

const NotFoundPage = () => {
  return (
    <div>
      <NotFoundPicture />
      <PageLink to="/">
        <LogOutButton
          src={LogoutVector}
          content="Turn Back"
          bottom="2%"
          textColor="backgroundcolor"
        />
      </PageLink>
      <NotFoundTypography>Are you lost my friend?</NotFoundTypography>
      <SiteNameContainer>
        <SiteNameLeft>Plant</SiteNameLeft>
        <div>
          <SiteNameRight>Lovers</SiteNameRight>
          <RedLine />
          <NewSiteName>Haters</NewSiteName>
        </div>
      </SiteNameContainer>
    </div>
  );
};

export default NotFoundPage;
