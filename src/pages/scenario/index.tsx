import { Box } from "components/ui/box";
import { Table } from "components/table";
import { Header } from "./header";
import { CarouselBox } from "./details/carousel-box";
import { BoxWithTitle } from "./details/box-with-title";
import { useState } from "react";
import { Badge } from "components/ui/badge";

const configurations_items = [
  {
    title: "1400 - WASP Oceanwings",
    description: "6 x 363 sqm Oceanwings",
  },
  {
    title: "2800 - WASP Bere",
    description: "6 x 363 sqm Bere",
  },
  {
    title: "1400 - WASP Oceanwings",
    description: "6 x 363 sqm Oceanwings",
  },
  {
    title: "2800 - WASP Bere",
    description: "6 x 363 sqm Bere",
  },
];
const routes_items = [
  {
    title: "NEWMO",
    description: "North Europe - Indian Sub Continent",
  },
  {
    title: "NEWMO 2",
    description: "South Europe - Indian Sub Continent",
  },
];

export type Row = {
  title: string;
  status: "pending" | "failed" | "success";
  description: string;
  id: string;
};

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

const headers = ["Title", "Status", "Actions"];

const data = {
  date: {
    departure_date: {
      label: "Departure date",
      value: "January 1st 2022",
    },
    last_departure_date: {
      label: "Last departure date",
      value: "June 30th 2022",
    },
    time_step: {
      label: "Time step",
      value: "1 day",
    },
  },
  weather: {
    type: {
      label: "Type",
      value: "Actimar averaged weather",
    },
  },
  ship_speeds: {
    one: {
      label: "kts",
      value: "Profile speed 7",
    },
    two: {
      label: "kts",
      value: "Profile speed -2kts",
    },
    three: {
      label: "kts",
      value: "Profile speed -4kts",
    },
  },
  summary: {
    total_distance: {
      label: "Total distance",
      value: "34 578 nm",
    },
    departures: {
      label: "Departures",
      value: "1244",
    },
  },
};

export const Scenario = () => {
  const [selectedScenario, setSelectedScenario] = useState<
    Row | Record<string, any> | null
  >(null);
  return (
    <div className="p-4 h-screen ">
      <Header />
      <div className="flex justify-between mt-2">
        <Box className=" w-3/5 mr-1" title=" Latest Scenario">
          <div className="  overflow-y-auto mt-2 w-full">
            <Table
              headers={headers}
              rows={rows}
              handleSelect={(row) => setSelectedScenario(row)}
            />
          </div>
        </Box>
        <Box className="w-2/5 ml-1 " title="Scenario details">
          <div className="flex justify-between ">
            <h3 className="text-lg font-medium  pr-2 ">
              {selectedScenario?.title}
            </h3>
            <Badge
              label={selectedScenario?.status}
              status={selectedScenario?.status}
            />
          </div>
          <div className="mt-2">
            <CarouselBox
              title="twin configuration"
              items={configurations_items}
            />
          </div>
          <div className="mt-10">
            <CarouselBox title="routes" items={routes_items} />
          </div>
          <div className="mt-10">
            <BoxWithTitle title="Departures dates" data={data.date} />
          </div>
          <div className="mt-10">
            <BoxWithTitle title="weather" data={data.weather} />
          </div>
          <div className="mt-10">
            <BoxWithTitle title="Ship speeds" data={data.ship_speeds} />
          </div>
          <div className="mt-10">
            <BoxWithTitle title="Summary" data={data.summary} />
          </div>
        </Box>
      </div>
    </div>
  );
};
