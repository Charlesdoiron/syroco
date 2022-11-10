const stats = [
  { name: "Simulated", stat: "123,455 nm" },
  { name: "Available routes", stat: "16" },
  { name: "Available twins", stat: "18" },
];

export const Stats = () => {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white  shadow-sm p-3"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
