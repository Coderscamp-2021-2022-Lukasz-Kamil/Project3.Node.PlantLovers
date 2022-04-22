import React from "react";
import {ReactComponent as Arrow} from "../../../assets/DownVector.svg";
import { Dropdown } from "../../ui/Dropdown/Dropdown";


const PlantsPage = () => {
  return (
  <div>
    PlantsPage
    <Dropdown title="Category" ico={<Arrow/>} list={[]}/>
  </div>);
};

export default PlantsPage;
