"use client";

import React from "react";
import Image from "next/image"
import SwapBarChart from '../charts/paw_swap/SwapBarChart'
import SwapPieChart from "../charts/paw_swap/SwapPieChart";
import { PhoneHeader } from "./PhoneHeader";

export const PawSwap = () => {
  return (
    <>
      <PhoneHeader/>
      <div className="md:hidden flex flex-row justify-center items-center">
          <span className="font-bold text-[36px]">Paw Swap</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Paw Swap</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-4 md:mb-8 md:gap-[20px]">
          <div className="col-span-3 md:col-span-1 gradient-box flex flex-col justify-center items-center mb-4 md:mb-0">
              <span className="font-thin lg:font-bold text-[14px] md:text-[15px] lg:text-[16px]">Total Sawp Volume in USD</span>
              <span className="block md:hidden lg:block font-bold text-[24px] mt-[2px]">$332,484,767,345.03</span>
              <span className="hidden md:block lg:hidden font-bold text-[24px] mt-[2px]">$332M</span>
          </div>
          <div className="col-span-1 gradient-box flex flex-col justify-center items-center mr-2 md:mr-0"> 
              <span className="font-thin lg:font-bold text-[14px] md:text-[15px] lg:text-[16px] text-center">Cross-Chain Swaps</span>
              <span className="block md:hidden lg:block font-bold text-[24px] mt-[2px]">4,751,821</span>
              <span className="hidden md:block lg:hidden font-bold text-[24px] mt-[2px]">4.7M</span>     
          </div>
          <div className="col-span-1 gradient-box flex flex-col justify-center items-center ml-2 md:mr-0">
              <span className="font-thin lg:font-bold text-[14px] md:text-[15px] lg:text-[16px] text-center">On-Chain Swaps</span>
              <span className="block md:hidden lg:block font-bold text-[24px] mt-[2px]">326,123</span>
              <span className="hidden md:block lg:hidden font-bold text-[24px] mt-[2px]">326K</span>
          </div> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-8 gap-[20px]">
          <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
              <span className="font-thin lg:font-bold text-[16px]">Swap Fee Collected</span>
              <span className="font-bold text-[24px] mt-[2px]">52,413,506,998,930</span>
          </div>
          <div className="col-span-1 gradient-box flex flex-col justify-center items-center"> 
              <span className="font-thin lg:font-bold text-[16px]">Swap Growth Rate</span>
              <span className="font-bold text-[24px] mt-[2px]">12%</span>     
          </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-8 gap-[20px]">
          <div className="col-span-1 gradient-box">
              <SwapBarChart/>
          </div> 
          <div className="col-span-1 gradient-box">
              <SwapPieChart/>
          </div>     
      </div>
      <div className="md:hidden flex flex-row justify-center items-center mt-4">
          <Image
              className="h-[22px] w-[116px]"
              src="/assets/images/Paw Chain logo.png"
              alt="Paw Chain Logo"
              width={116}
              height={22}
            />
      </div>
    </>
  );
}