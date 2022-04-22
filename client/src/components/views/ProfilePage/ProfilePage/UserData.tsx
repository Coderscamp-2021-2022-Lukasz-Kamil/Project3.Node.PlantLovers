import React from "react";
import styled from "styled-components";
import { Button } from "../../../ui/Button/Button.style";
import { Input } from "../../../ui/Input/Input.style";
import { Typography } from "../../../ui/Typography/Typography.style";

export const ProfilePageContainerColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
export const ProfilePageContainerColumnItem = styled.div`
  width: 70%;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const ProfilePageTypography = styled(Typography)`
  margin-bottom: 10px;
`;
const UserData = () => {
  const allData = [
    { name: "Name" },
    { name: "E-mail" },
    { name: "Phone Number" },
    { name: "City" },
  ];
  return (
    <ProfilePageContainerColumn>
      {allData.map((data) => (
        <ProfilePageContainerColumnItem key={data.name}>
          <ProfilePageTypography fontSize="mdl">
            {data.name}
          </ProfilePageTypography>
          <Input fontSize="md" width="100%" />
        </ProfilePageContainerColumnItem>
      ))}
      <Button>Save changes</Button>
    </ProfilePageContainerColumn>
  );
};

export default UserData;
