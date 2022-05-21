/* eslint-disable react/prop-types */
import React from "react";
import { InputSearch } from "./AdminUsersOffersPage.styled";

export const DefaultColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter } = column;

  return (
    <InputSearch
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    />
  );
};
