import React from "react";
import { Button } from "../../../ui/Button/Button.style";
import { Input } from "../../../ui/Input/Input.style";
import {
  ProfilePageContainerColumn,
  ProfilePageContainerColumnItem,
  ProfilePageTypography,
} from "./UserData";

const UserPassword = () => {
  const allData = [
    { name: "Current Password" },
    { name: "New Password" },
    { name: "Confirm New Password" },
  ];
  return (
    <ProfilePageContainerColumn>
      {allData.map((data) => (
        <ProfilePageContainerColumnItem key={data.name}>
          <ProfilePageTypography fontSize="mdl">
            {data.name}
          </ProfilePageTypography>
          <Input width="100%" />
        </ProfilePageContainerColumnItem>
      ))}
      <Button>Change Password</Button>
    </ProfilePageContainerColumn>
  );
};

export default UserPassword;
