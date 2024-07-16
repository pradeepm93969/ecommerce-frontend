"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

const TopHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const datas = [
    { url: "/download-app", text: "Free Same day delivery" },
    { url: "/download-app", text: "Buy Now, Pay later with Tabby" },
    { url: "/download-app", text: "10% off on first App Order - APP10" },
  ];

  const renderCarousel = (datas) => {
    return datas.map((data, index) => (
      <Link href={data.url} passHref key={index}>
        <div className="cursor-pointer flex items-center justify-center h-8">
          {data.text}
        </div>
      </Link>
    ));
  };

  return (
    <div class="max-w-full h-8 bg-secondary-800 text-xs font-normal text-white block">
      <Slider {...settings}>{renderCarousel(datas)}</Slider>
    </div>
  );
};

export default TopHeader;
