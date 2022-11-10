import { Badge } from "components/ui/badge";
import { classNames } from "utils";
import { XCircleIcon } from "@heroicons/react/24/outline";
type Scenario = {
  title: string;
  status: "pending" | "failed" | "success";
  description: string;
};

const people: Scenario[] = [
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
  },
];

export const Table = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto"></div>
      </div>
      <div className=" flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className=" min-w-full align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5 overflow-hidden md:rounded-lg">
              <table
                className="min-w-full border-separate "
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50 rounded-md">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {people.map((person, personIdx) => (
                    <tr
                      key={person.title}
                      className={`${
                        personIdx % 2 === 0 ? undefined : "bg-gray-50"
                      } cursor-pointer hover:translate-x-1 transform transition-all duration-300`}
                    >
                      <td
                        className={classNames(
                          personIdx !== people.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-600 hidden sm:table-cell "
                        )}
                      >
                        {person.title}
                        <br />
                        <p className="text-gray-400"> {person.description}</p>
                      </td>

                      <td
                        className={classNames(
                          personIdx !== people.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        )}
                      >
                        <Badge label={person.status} status={person.status} />
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"
                        )}
                      >
                        <a
                          href="/ds"
                          className={
                            person.status === "pending" ? "visible" : "hidden"
                          }
                        >
                          <XCircleIcon className="text-gray-400 h-6  hover:text-indigo-900 -ml-3" />
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
  );
};
