export const Badge = ({
  label,
  status = "success",
}: {
  label: string;
  status?: "pending" | "failed" | "success";
}) => {
  const variant = {
    pending: "bg-blue-100 text-blue-800",
    failed: "bg-red-100 text-red-800",
    success: "bg-green-100 text-green-800",
  };
  if (!label) return <></>;
  return (
    <span
      className={`items-center rounded-full flex px-2.5 py-0.5 text-xs font-medium ${variant[status]} min-w-[80px] justify-center max-h-5`}
    >
      {label}
    </span>
  );
};
