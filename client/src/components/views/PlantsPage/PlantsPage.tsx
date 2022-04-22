import React from "react";
import {ReactComponent as Arrow} from "../../../assets/DownVector.svg";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { Item } from "../../ui/Dropdown/Dropdown.intefrace";



const items:Item[] = [
	{
		id: 1,
		name: "hanging plants",
	},
	{
		id: 2,
		name: "cacti and succulents",
	},
	{
		id: 3,
		name: "blooming",
	},
	{
		id: 4,
		name: "green",
	},
	{
		id: 5,
		name: "trees and shrubs",
	},
	{
		id: 6,
		name: "others",
	},
];

const PlantsPage = () => {
  return (
  <div>
    PlantsPage
    <Dropdown title="Category" ico={<Arrow/>} list={items}/>
  </div>);
};

export default PlantsPage;
