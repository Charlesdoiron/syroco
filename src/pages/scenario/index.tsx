import { Box } from "components/ui/box";
import { Table } from "components/table";
import { Header } from "./header";

export const Scenario = () => {
  return (
    <div className="p-4 h-screen ">
      <Header />
      <div className="flex justify-between mt-2">
        <Box className=" w-3/5 mr-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900 ">
            Latest Scenario
          </h3>
          <div className="mt-8 h-[75vh] overflow-y-auto py-5 px-2 w-full">
            <Table />
          </div>
        </Box>
        <Box className="w-2/5 ml-1">
          <h1 className="text-xl font-bold">Scenario details</h1>
        </Box>
      </div>
    </div>
  );
};
