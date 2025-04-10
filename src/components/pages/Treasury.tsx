"use client";

import React from "react";
import Image from "next/image"
import TreasuryStackedBarChart from "../charts/treasury/TreasuryStackedBarChart";

const legendItems = [
  { label: 'From Swaps', color: 'bg-blue-600' },
  { label: 'From Treasury LP', color: 'bg-gray-300' },
  { label: 'From Transactions', color: 'bg-blue-800' },
  { label: 'From PAW PAY', color: 'bg-blue-400' },
  { label: 'From Wallet Naming', color: 'bg-white border border-gray-300' },
  { label: 'From PAW API', color: 'bg-blue-500' },
];

export const Treasury = () => {
  return (
    <>
      <div className="md:hidden flex flex-row justify-between items-center">
            <Image
              className="h-[30px] w-[26px]"
              src="/images/Paw Chain logo.png"
              alt="Paw Chain Logo"
              width={26.34}
              height={39}
            />
            <div className="relative w-8 h-8 p-0.5 rounded-lg bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
              <div className="flex items-center justify-center w-full h-full bg-[#021F6A] rounded-md">
                <svg className="w-6 h-6 text-[#5851E8]" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="2" rx="1"/>
                  <rect x="4" y="11" width="16" height="2" rx="1"/>
                  <rect x="4" y="16" width="16" height="2" rx="1"/>
                </svg>
              </div>
            </div>
      </div>
      <div className="md:hidden flex flex-row justify-center items-center">
          <span className="font-bold text-[36px]">Treasury</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Treasury</span>
      </div>

      <div className="grid grid-cols-1 gradient-box mt-4 lg:hidden">
          <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="font-bold text-[16px]">Treasury Growth in USD</span>
              <span className="font-bold text-[24px]">23,412,345,612,04</span>
          </div>
      </div>

      <div className="hidden lg:hidden md:grid grid-cols-3 justify-center items-center mt-4">
          {legendItems.map((item, index) => (
            <div key={index} className="flex flex-row items-center">
              {/* Colored Bar */}
              <div className={`w-8 h-3 ${item.color} rounded-sm ml-8`}></div>
              {/* Label */}
              <span className="text-[16px] ml-4">{item.label}</span>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 gradient-box1 mt-4">
          <div className="hidden lg:flex flex-row justify-between items-center mb-4 mt-4 px-4 ">
              <span className="font-bold text-[36px]">Treasury Growth in USD</span>
              <span className="font-bold text-[36px]">23,412,345,612,04</span>
          </div>
          <div className="flex md:hidden flex-row justify-center items-center mb-4 mt-4">
              <span className="font-bold text-[24px]">Income From</span>
          </div>
          <div className="flex flex-row justify-center items-center mb-5 w-full">
            <span className="block md:hidden lg:block w-full h-[1px] bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]"></span>
          </div>
          <TreasuryStackedBarChart />
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