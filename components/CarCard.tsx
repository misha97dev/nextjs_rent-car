"use client";
import { CarProps } from "@/types";
import { calculateCarPrice, generateCarImg } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CustomBtn, ModalCarInfo } from ".";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const carPrice = calculateCarPrice(car.city_mpg, car.year);
  return (
    <div className="car-card group mt-6 ">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carPrice}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImg(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/icons/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/icons/tire.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/icons/gas.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">{car.city_mpg}MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomBtn
            title="Show details"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/icons/right-arrow.svg"
            handleClick={() => setModalOpen(true)}
          />
        </div>
      </div>
      <ModalCarInfo
        isOpen={modalOpen}
        car={car}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
};

export default CarCard;
