import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
  ActionButton,
} from "../UsersOffersPage/AdminUsersOffersPage.styled";
import { Column, useTable } from "react-table";
import { useMemo, useEffect } from "react";
import { Method } from "axios";
import { toast } from "react-toastify";
import useFetchData from "../../../../hooks/UseFetch";
import Height from "../../../../shared/intefaces/height.interface";
import { WrapperOfTable } from "./CategoriesAndHeightsPage.styled";
import { useCookies } from "react-cookie";
import { handleDeleteHeight } from "../../../../shared/API/api";

interface CellProps {
  [key: string]: any;
}

export const HeightsTable = ({ heights, setHeights }: any) => {
  const [token] = useCookies(["token"]);

  const { response, error, loading } = useFetchData<Height[]>({
    url: "/heights",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  });

  const data = useMemo<Height[]>(() => heights, [heights]);

  const labelCell = ({ cell }: CellProps) => (
    <div className="align-center">
      <ActionButton
        className="delete align-center"
        value={cell.row.values.id}
        onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
          const heights = await handleDeleteHeight(cell.row.values._id, token);
          if (heights) {
            setHeights(heights);
          }
        }}
      >
        Delete
      </ActionButton>
    </div>
  );

  const columns = React.useMemo<Column<Height>[]>(
    () => [
      {
        Header: "Height",
        columns: [
          {
            Header: "",
            accessor: "range",
          },
        ],
      },
      {
        Header: "Action",
        columns: [
          {
            Header: "",
            accessor: "_id",
            Cell: labelCell,
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  useEffect(() => {
    if (heights) {
      setHeights(heights);
    }
    if (error) {
      toast.error("Height not found");
    }
  }, [response]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <WrapperOfTable>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => {
              const { key, ...restHeaderGroup } =
                headerGroup.getHeaderGroupProps();
              return (
                <TableRow {...restHeaderGroup} key={key}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...restAttributes } = column.getHeaderProps();
                    return (
                      <TableHeader {...restAttributes} key={key}>
                        {column.render("Header")}
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </TableHeader>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <TableRow {...restRowProps} key={key}>
                  {row.cells.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps();
                    return (
                      <TableData {...restCellProps} key={key}>
                        {cell.render("Cell")}
                      </TableData>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </WrapperOfTable>
    </>
  );
};
