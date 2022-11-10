import { Link } from "react-router-dom";
import { classNames } from "utils";

type ItemProps = {
  item: {
    name: string;
    href: string;
    icon: React.ComponentType<React.ComponentProps<"svg">>;
    current: boolean;
    isSmall?: boolean;
  };
};

export const Item = ({ item }: ItemProps) => {
  return (
    <Link
      key={item.name}
      to={item.href}
      className={classNames(
        item.current
          ? "font-bold text-orange "
          : "text-gray-700 hover:text-gray-300",
        `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          item.isSmall ? "text-sm" : ""
        }`
      )}
    >
      <item.icon
        className={classNames(
          item.current
            ? "text-orange"
            : "text-gray-700 group-hover:text-gray-300",
          `mr-4 flex-shrink-0 ${item.isSmall ? "w-5 h-5" : "w-6 h-6"}`
        )}
        aria-hidden="true"
      />
      {item.name}
    </Link>
  );
};
