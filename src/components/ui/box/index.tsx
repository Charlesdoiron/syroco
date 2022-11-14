interface BoxProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Box = ({ title, children, className }: BoxProps) => {
  return (
    <div className={`bg-white rounded-sm shadow-sm ${className} `}>
      {title && (
        <div className="bg-blue-600 p-3 rounded-t-sm">
          <h1 className="text-lg font-medium leading-6 text-white  pr-2  ">
            {title}
          </h1>
        </div>
      )}
      <div className="p-6 ">{children}</div>
    </div>
  );
};
