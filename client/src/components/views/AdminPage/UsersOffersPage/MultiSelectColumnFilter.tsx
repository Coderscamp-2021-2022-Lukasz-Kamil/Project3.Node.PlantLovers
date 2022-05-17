/* eslint-disable react/prop-types */
import React from "react";

export const SelectColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;
  // Calculate the options for filtering
  // using the preFilteredRows
  const options: string[] = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]) as string[];

  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option ? "Active" : "Activate"}
        </option>
      ))}
    </select>
  );
};
