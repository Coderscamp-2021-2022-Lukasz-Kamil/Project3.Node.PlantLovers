/* eslint-disable react/prop-types */
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
import { Method } from "axios";
import { useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import useFetchData from "../../../../hooks/UseFetch";
import { useCookies } from "react-cookie";
import Category from "../../../../shared/intefaces/category.interface";
import { WrapperOfTable } from "./CategoriesAndHeightsPage.styled";
import { handleDeleteCategory } from "../../../../shared/API/api";

export const CategoriesTable = ({ categories, setCategories }: any) => {
  const [token] = useCookies(["token"]);

  const { response, error, loading } = useFetchData<Category[]>({
    url: "/categories",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  });
  const data = useMemo<Category[]>(() => categories, [categories]);

  const columns = React.useMemo<Column<Category>[]>(
    () => [
      {
        Header: "Category",
        columns: [
          {
            Header: "",
            accessor: "name",
          },
        ],
      },
      {
        Header: "Action",
        columns: [
          {
            Header: "",
            accessor: "_id",
            Cell: ({ cell }) => (
              <div className="align-center">
                <ActionButton
                  className="delete align-center"
                  value={cell.row.values.id}
                  onClick={async (
                    event: React.MouseEvent<HTMLButtonElement>
                  ) => {
                    const categories = await handleDeleteCategory(
                      cell.row.values._id,
                      token
                    );
                    if (categories) {
                      setCategories(categories);
                    }
                  }}
                >
                  Delete
                </ActionButton>
              </div>
            ),
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  useEffect(() => {
    if (response) {
      setCategories(response);
    }
    if (error) {
      toast.error("Height not found");
    }
  }, [response]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const displayCategories: Category[] = response ? response : [];

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
