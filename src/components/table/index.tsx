import { Badge } from "components/ui/badge";
import { classNames } from "utils";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { Row } from "pages/scenario";
import { Filters } from "./filters";
import { useEffect, useState } from "react";
import { Box } from "components/ui/box";

interface Props {
  headers: string[];
  rows: Row[] | Record<string, any>[];
}

export const Table = ({ headers, rows }: Props) => {
  const [search, setSearch] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    const filtered = rows.filter((row) => {
      return row.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredRows(filtered);
  }, [search, rows]);

  if (filteredRows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-full mb-4">
          <Filters onChange={(v) => setSearch(v)} />
        </div>
        <Box className="w-full text-center flex justify-center flex-column">
          <p className="text-16 text-gray-500 mt-4">No results found ...</p>
        </Box>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full mb-4">
        <Filters onChange={(v) => setSearch(v)} />
      </div>
      <p className="text-right text-xs mb-2">{filteredRows.length} results</p>

      <div className=" sm:px-6 lg:px-8 ">
        <div className="flex flex-col">
          <div className=" -mx-4 sm:-mx-6 lg:-mx-8">
            <div className=" min-w-full align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5 overflow-hidden md:rounded-lg">
                <table
                  className="min-w-full border-separate "
                  style={{ borderSpacing: 0 }}
                >
                  <thead className="bg-gray-50 rounded-md">
                    <tr>
                      {headers.map((header) => (
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredRows.map((row, idx) => (
                      <tr
                        key={row.id}
                        className={`${
                          idx % 2 === 0 ? undefined : "bg-gray-50"
                        } cursor-pointer hover:translate-x-1 transform transition-all duration-300`}
                      >
                        <td
                          className={classNames(
                            idx !== rows.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            " px-3 py-4 text-sm text-gray-600 hidden sm:table-cell "
                          )}
                        >
                          {row.title}
                          <br />
                          <p className="text-gray-400"> {row.description}</p>
                        </td>

                        <td
                          className={classNames(
                            idx !== rows.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            " px-3 py-4 text-sm text-gray-500"
                          )}
                        >
                          <Badge label={row.status} status={row.status} />
                        </td>
                        <td
                          className={classNames(
                            idx !== rows.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "relative  py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"
                          )}
                        >
                          <a
                            href="/ds"
                            className={
                              row.status === "pending" ? "visible" : "hidden"
                            }
                          >
                            <XCircleIcon className="text-gray-400 h-6  hover:text-indigo-900 pl-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
