import { ChartBarIcon } from "@heroicons/react/24/outline";
import { Badge } from "components/ui/badge";
import { Box } from "components/ui/box";
import { Button } from "components/ui/button";
import { BoxWithTitle } from "./box-with-title";
import { CarouselBox } from "./carousel-box";
import { ReactComponent as Spinner } from "assets/icons/spinner.svg";
import { Row } from "..";

interface Props {
  selectedScenario: Row | Record<string, any> | null;
  configurations_items: {
    title: string;
    description: string;
  }[];
  routes_items: {
    title: string;
    description: string;
  }[];
  data: Record<string, any> | null;
}

export const Details = ({
  selectedScenario,
  configurations_items,
  data,
  routes_items,
}: Props) => {
  const isSuccess = selectedScenario?.status === "success";
  const isPending = selectedScenario?.status === "pending";
  const isFailed = selectedScenario?.status === "failed";
  return (
    <Box className="w-2/5 ml-1  mb-5 sticky top-2" title="Scenario details">
      <div className="flex justify-between items-center ">
        <h3 className="text-lg font-medium  pr-2 ">
          {selectedScenario?.title}
        </h3>
        <Badge
          label={selectedScenario?.status}
          status={selectedScenario?.status}
        />
      </div>
      {!isFailed && (
        <div className="text-center">
          <Button
            isLoading={isPending}
            className="my-5"
            onClick={() => {
              alert("🏴 Redirecting to scenario details in Tablo soon");
            }}
          >
            {isSuccess ? (
              <ChartBarIcon className="w-4 mr-2" />
            ) : (
              <Spinner className="w-4 mr-2 animate-spin " />
            )}
            {isSuccess ? "View result of scenario" : "building the result"}
          </Button>
        </div>
      )}
      <div className="mt-2">
        <CarouselBox title="twin configuration" items={configurations_items} />
      </div>
      <div className="mt-10">
        <CarouselBox title="routes" items={routes_items} />
      </div>
      <div className="mt-10">
        <BoxWithTitle title="Departures dates" data={data?.date} />
      </div>
      <div className="mt-10">
        <BoxWithTitle title="weather" data={data?.weather} />
      </div>
      <div className="mt-10">
        <BoxWithTitle title="Ship speeds" data={data?.ship_speeds} />
      </div>
      <div className="mt-10">
        <BoxWithTitle title="Summary" data={data?.summary} />
      </div>
    </Box>
  );
};
