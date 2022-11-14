import { Header } from "./header";
import { useState } from "react";

import { Details } from "./details";
import { LatestScenario } from "./latest-scenario";

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
        <LatestScenario setSelectedScenario={setSelectedScenario} />
        <Details
          data={data}
          selectedScenario={selectedScenario}
          configurations_items={configurations_items}
          routes_items={routes_items}
        />
      </div>
    </div>
  );
};
