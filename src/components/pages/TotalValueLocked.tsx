"use client";

import React from "react";
import Image from "next/image"
import TVLPieChart from "../charts/total_value_locked/TVLPieChart";
import TVLStackedBarChart from "../charts/total_value_locked/TVLStackedBarChart";
import TVLGrowthBarChart from "../charts/total_value_locked/TVLGrowthBarChart";
import { PhoneHeader } from "./PhoneHeader";
import { PhoneFooter } from "./PhoneFooter";

export const TotalValueLocked = () => {
  return (
    <>
      <PhoneHeader />
      <div className="md:hidden flex flex-row justify-center items-center">
          <span className="font-bold text-[30px]">Total Value Locked</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Total Value Locked</span>
      </div>
      <div className="flex lg:hidden md:flex flex-col gradient-box justify-center items-center">
          <span className="text-[16px]">Total PAW Chain TVL in USD </span>
          <span className="font-bold text-[24px] mt-[2px]">$332,484,767,345.03</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-5 gradient-box1 md:gradient-box mt-4">
          <TVLPieChart/>
        </div>
        <div className="col-span-7 lg:ml-4 mt-4">
            <div className = "hidden md:hidden lg:flex flex-col justify-center items-center gradient-box mb-4">
              <span className="text-[16px]">Total PAW Chain TVL in USD </span>
              <span className="font-bold text-[24px] mt-[2px]">$332,484,767,345.03</span>
            </div>
            <div className = "gradient-box1 md:gradient-box">
               <TVLStackedBarChart/>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gradient-box1 md:gradient-box mt-4">
          <TVLGrowthBarChart/>
      </div>
      <PhoneFooter/>
      <div className="hidden md:block lg:hidden mt-12">
      </div>
    </>
  );
}