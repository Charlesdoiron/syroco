import { Button } from "components/ui/button";
import { Stats } from "./stats";

import {
  PlusIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <div className="mb-4 flex items-center">
      <div className="w-3/5">
        <Stats />
      </div>
      <div className="w-2/5 flex justify-end ">
        <Button className="mr-2">
          <DocumentMagnifyingGlassIcon className="w-4 mr-2" />
          Workspace result
        </Button>

        <Button color="blue">
          <PlusIcon className="w-4 mr-2" />
          Create a scenario
        </Button>
      </div>
    </div>
  );
};
