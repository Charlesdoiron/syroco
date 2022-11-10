interface Props {
  title: string;
}
export const BoxWithTitle = ({ title }: Props) => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-xs uppercase whitespace-nowrap mr-3 font-bold">
          • {title}
        </p>
        <div className="border border-t w-full h-1 border-b-0 border-r-0 border-l-0 mt-[2px]" />
      </div>
    </div>
  );
};
