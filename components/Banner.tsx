"use client";
import Image from "next/image";
import { CustomBtn } from ".";

const Banner = () => {
  const handleScroll = () => {};
  return (
    <div className="banner">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="banner__title">
          Find, book, rent a car -- quickly and easily
        </h1>
        <p className="banner__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomBtn
          title="Explore cars"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="banner__img-container">
        <div className="banner__img">
          <Image
            src="/images/banner.png"
            alt="car"
            fill
            className="object-contain"
          />
        </div>
        <div className="banner__img-overlay" />
      </div>
    </div>
  );
};

export default Banner;
