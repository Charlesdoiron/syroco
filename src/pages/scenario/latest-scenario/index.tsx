import { Table } from "components/table";
import { Box } from "components/ui/box";
import { Row } from "..";

const headers = ["Title", "Status", "Actions"];
const rows: Row[] = [
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
    id: "1",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
    id: "2",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
    id: "3",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
    id: "4",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
    id: "5",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
    id: "6",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
    id: "7",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
    id: "8",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
    id: "9",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
    id: "10",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
    id: "11",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
    id: "12",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
    id: "13",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
    id: "14",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
    id: "15",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
    id: "16",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "success",
    id: "17",
  },
  {
    title: "5100 - Winter passages North Pacific",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "failed",
    id: "18",
  },
  {
    title: "138000 - Transpacific routes with Norsepower",
    description: "Process start: 29-09-2022 11:03",
    status: "pending",
    id: "19",
  },
  {
    title: "1400 - Transidian routes with all WASPs",
    description:
      "1 departure / 7 days - Profile speed and speed reductions of 2 and 4 kts",
    status: "pending",
    id: "20",
  },
];
interface Props {
  setSelectedScenario: (row: Row | Record<string, any>) => void;
}

export const LatestScenario = ({ setSelectedScenario }: Props) => {
  return (
    <Box className=" w-3/5 mr-1 mb-5" title=" Latest Scenario">
      <div className="  overflow-y-auto mt-2 w-full">
        <Table
          headers={headers}
          rows={rows}
          handleSelect={(row) => setSelectedScenario(row)}
        />
      </div>
    </Box>
  );
};
