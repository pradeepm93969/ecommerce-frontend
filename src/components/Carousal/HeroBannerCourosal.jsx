"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const HeroBannerCourosal = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const desktopImages = [
    { url: "/images/hero/desktop-2.png", href: "/services/flags-and-poles" },
    {
      url: "/images/hero/desktop-3.png",
      href: "/services/inflatable-structures",
    },
    { url: "/images/hero/desktop-1.png", href: "/services/vehicle-branding" },
  ];

  const mobileImages = [
    { url: "/images/hero/mobile-1.png", href: "/services/vehicle-branding" },
    { url: "/images/hero/mobile-2.png", href: "/services/flags-and-poles" },
    {
      url: "/images/hero/mobile-3.png",
      href: "/services/inflatable-structures",
    },
  ];

  const renderCarousel = (images) => {
    return images.map((image, index) => (
      <Link href={image.href} passHref key={index}>
        <div className="relative h-[8px] bg-primary-500 text-white text-center text-sm font-medium">
          {image.href}
        </div>
      </Link>
    ));
  };

  return (
    <section className="max-w-full h-[8px] bg-primary-500 text-white">
      <div className="hidden md:block">
        <Slider {...settings}>{renderCarousel(desktopImages)}</Slider>
      </div>
      <div className="md:hidden block">
        <Slider {...settings}>{renderCarousel(mobileImages)}</Slider>
      </div>
    </section>
  );
};

export default HeroBannerCourosal;
