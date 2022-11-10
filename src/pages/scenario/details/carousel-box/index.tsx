import { Carousel } from "components/carousel";
import { Box } from "components/ui/box";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  centerPadding: "30px",
  autoplay: true,
  autoplaySpeed: 4000,
};

interface Settings {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

export const CarouselBox = ({ title, items }: Settings) => {
  return (
    <div className="">
      <div className="flex items-center my-4">
        <p className="text-xs uppercase whitespace-nowrap mr-3 font-bold">
          • {title}
        </p>
        <div className="border border-t w-full h-1 border-b-0 border-r-0 border-l-0 mt-[2px]" />
      </div>
      <Carousel
        settings={settings}
        items={items.map((it) => {
          return (
            <Box className="min-w-[300px] border mr-5 text-center shadow-xs cursor-grab ">
              {it.title}
              <p className="text-gray-400">{it.description}</p>
            </Box>
          );
        })}
      />
    </div>
  );
};
