import React from "react";
import Slider from "react-slick";

interface SliderProps {
  items: React.ReactNode[];
  settings?: any;
}

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel = ({
  items,
  settings = defaultSettings,
}: SliderProps) => {
  return (
    <div>
      <Slider {...settings}>{items}</Slider>
    </div>
  );
};
