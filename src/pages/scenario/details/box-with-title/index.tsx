interface Props {
  title: string;
  data?: Record<any, any>;
}

const Row = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center my-4">
      <span className="text-12 text-white bg-blue-500 px-2 py-1 rounded-sm">
        {label}
      </span>
      <p className="text-sm ml-2">{value}</p>
    </div>
  );
};

export const BoxWithTitle = ({ title, data }: Props) => {
  if (!data) return <></>;
  return (
    <div>
      <div className="flex items-center">
        <p className="text-xs uppercase whitespace-nowrap mr-3 font-bold">
          • {title}
        </p>
        <div className="border border-t w-full h-1 border-b-0 border-r-0 border-l-0 mt-[2px]" />
      </div>
      {Object.entries(data).map(([_, value]) => (
        <Row label={value.label} value={value.value} />
      ))}
    </div>
  );
};
