/* eslint-disable react/prop-types */
import React from "react";
import { useState, useMemo, useEffect } from "react";
import useFetchData from "../../../../hooks/UseFetch";
import { Method } from "axios";
import { toast } from "react-toastify";
import { DefaultColumnFilter } from "../UsersOffersPage/DefaultColumnFilter";
import {
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
  ActionButton,
} from "../UsersOffersPage/AdminUsersOffersPage.styled";
import {
  handleDeleteUser,
  handleChangeToAdmin,
} from "../../../../shared/API/api";
import { FilterByAdmin } from "./FilterByAdmin";
import { Heading } from "./ManageUsersPage.styled";
import { useCookies } from "react-cookie";
import { Column, useTable, useFilters } from "react-table";

interface User {
  _id: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
}

const ManageUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [token] = useCookies(["token"]);

  const { response, error, loading } = useFetchData<User[]>({
    url: "/users",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  });

  const data = useMemo<User[]>(() => users, [users]);

  const columns = useMemo<Column<User>[]>(
    () => [
      {
        Header: "_ID",
        columns: [
          {
            Header: "",
            accessor: "_id",
          },
        ],
      },
      {
        Header: "Email",
        columns: [
          {
            Header: "",
            accessor: "email",
          },
        ],
      },
      {
        Header: "Action",
        columns: [
          {
            Header: "",
            accessor: "column.id",
            Cell: ({ cell }: any) => (
              <div className="align-center">
                <ActionButton
                  className="delete align-center"
                  value={cell.row.values.id}
                  onClick={async (
                    event: React.MouseEvent<HTMLButtonElement>
                  ) => {
                    const users = await handleDeleteUser(
                      cell.row.values._id,
                      token
                    );
                    if (users) {
                      setUsers(users);
                    }
                  }}
                >
                  Delete
                </ActionButton>
              </div>
            ),
            Filter: "",
          },

          {
            Header: "",
            accessor: "isAdmin",
            Cell: ({ cell }: any) => {
              return cell.value === true ? (
                <p className="align-center">Admin</p>
              ) : (
                <div className="align-center">
                  <ActionButton
                    className="activate align-center"
                    value={cell.row.values.id}
                    onClick={async (
                      event: React.MouseEvent<HTMLButtonElement>
                    ) => {
                      const users = await handleChangeToAdmin(
                        cell.row.values._id,
                        token
                      );
                      if (users) {
                        setUsers(users);
                      }
                    }}
                  >
                    Make an Admin
                  </ActionButton>
                </div>
              );
            },
            Filter: FilterByAdmin,
          },
        ],
      },
    ],
    [data]
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const tableInstance = useTable({ columns, data, defaultColumn }, useFilters);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    if (response) {
      setUsers(response);
    }
    if (error) {
      toast.error("User not found");
    }
  }, [response]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const allUsers: User[] = response ? response : [];

  return (
    <>
      <Heading>Manage users</Heading>
      <TableWrapper>
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
      </TableWrapper>
    </>
  );
};

export default ManageUsersPage;
