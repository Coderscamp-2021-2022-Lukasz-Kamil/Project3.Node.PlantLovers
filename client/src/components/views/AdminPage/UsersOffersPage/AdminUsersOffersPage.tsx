/* eslint-disable react/prop-types */
import React from "react";
import {
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
  ActionButton,
} from "./AdminUsersOffersPage.styled";
import { useState, useEffect } from "react";
import useFetchData from "../../../../hooks/UseFetch";
import { Method } from "axios";
import { toast } from "react-toastify";
import { Column, useTable, useFilters } from "react-table";
import { useMemo } from "react";
import Photo from "../../../../shared/intefaces/photos.interface";
import { DefaultColumnFilter } from "./DefaultColumnFilter";
import { FilterbyActive } from "./FilterByActive";
import { useCookies } from "react-cookie";
import {
  handleDeleteOffer,
  handleActivateOffer,
} from "../../../../shared/API/api";

interface Offer {
  _id: string;
  city: string;
  title: string;
  photos: Photo[];
  isActive: boolean;
}

const AdminUsersOffersPage = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [token] = useCookies(["token"]);

  const { response, error, loading } = useFetchData<Offer[]>({
    url: "/offers",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  });

  const data = useMemo<Offer[]>(() => offers, [offers]);

  const columns = useMemo<Column<Offer>[]>(
    () => [
      {
        Header: "Photo",
        columns: [
          {
            Header: "",
            accessor: "photos[0].url",
            Cell: ({ cell: { value } }: any) => (
              <div className="offer-photo">
                <img src={value} />
              </div>
            ),
            Filter: "",
          },
        ],
      },
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
        Header: "Name",
        columns: [
          {
            Header: "",
            accessor: "title",
          },
        ],
      },
      {
        Header: "City",
        columns: [
          {
            Header: "",
            accessor: "city",
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
                    const offers = await handleDeleteOffer(
                      cell.row.values._id,
                      token
                    );

                    if (offers) {
                      setOffers(offers);
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
            accessor: "isActive",
            Cell: ({ cell }) => {
              return cell.value === true ? (
                <p className="align-center">Active</p>
              ) : (
                <div className="align-center">
                  <ActionButton
                    className="activate"
                    onClick={async (
                      event: React.MouseEvent<HTMLButtonElement>
                    ) => {
                      const offers = await handleActivateOffer(
                        cell.row.values._id,
                        token
                      );
                      if (offers) {
                        setOffers(offers);
                      }
                    }}
                  >
                    Activate
                  </ActionButton>
                </div>
              );
            },
            Filter: FilterbyActive,
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
      setOffers(response);
    }
    if (error) {
      toast.error("Offer not found");
    }
  }, [response]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const usersOffers: Offer[] = response ? response : [];

  return (
    <>
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

export default AdminUsersOffersPage;
