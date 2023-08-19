"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { CustomBtn } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ currentPage, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const updatedLimit = (currentPage + 1) * 10;
    const updatedPath = updateSearchParams("limit", `${updatedLimit}`);
    router.push(updatedPath);
  };
  return (
    <div className="w-full flex justify-center gap-5 mt-10">
      {!isNext && (
        <CustomBtn
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
