import React from "react";
import { ReactComponent as Arrow } from "../../../assets/DownVector.svg";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { CategoryList } from "../../ui/Dropdown/DropdownLists";

const PlantsPage = () => {
  return (
    <div>
      PlantsPage
      <Dropdown title="Category" ico={<Arrow />} list={CategoryList} />
    </div>
  );
};

export default PlantsPage;
