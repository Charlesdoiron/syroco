interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={`bg-white rounded-sm shadow-sm p-6 ${className} `}>
      {children}
    </div>
  );
};
