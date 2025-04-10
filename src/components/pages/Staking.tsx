"use client";

import React from "react";
import Image from "next/image"
import TotalStakedTokensRadialBarChart from "../charts/staking/TotalStakedTokensRadialBarChart";
import StakingAreaChart from "../charts/staking/StakingAreaChart";
import StakingRewardsLineChart from "../charts/staking/StakingRewardsLineChart";
import StakingParticipationRateStackedAreaChart from "../charts/staking/StakingParticipationRateStackedAreaChart";

export const Staking = () => {

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
          <span className="font-bold text-[36px]">Staking</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Staking</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 mb-4 lg:gap-[20px]">
        <div className="col-span-1 gradient-box mb-4 lg:mb-0">
          <TotalStakedTokensRadialBarChart />
        </div>
        <div className="col-span-1 md:col-span-2 gradient-box">
          <StakingAreaChart />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 gradient-box">
          <span className="col-span-1 text-center text-[24px]">Active Nodes</span>
          <span className="col-span-1 text-center text-[24px] font-bold">12</span>
      </div>
      <div className="flex flex-row justify-between items-center gradient-box md:hidden">
          <span className="col-span-1 text-center text-[24px]">Active Nodes</span>
          <span className="col-span-1 text-center text-[24px] font-bold">12</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-4 gap-[20px]">
        <div className="col-span-1 gradient-box">
          <div className="flex flex-col">
            <div className="flex flex-row justify-end items-center">
              <div>
                <p className="hidden md:block text-[10px] font-bold">Staking Rewards Distributed (PAW-Trillions/Time)</p>
                <p className="md:hidden text-[10px] font-bold">Staking Rewards Distributed </p>
                <p className="md:hidden text-[10px] font-bold text-right mt-[-4px]">(PAW-Trillions/Time)</p>
              </div>
              <button className="border border-[#5851E8] font-bold py-1 px-2 text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF] ml-[4px]">
                M
              </button>
            </div>
            <StakingRewardsLineChart />
          </div>
        </div>
        <div className="col-span-1 gradient-box">
        <div className="flex flex-col">
            <div className="flex flex-row justify-end items-center">
              <div>
                <p className="hidden md:block text-[10px] font-bold">Staking Participation Rate %Date</p>
                <p className="md:hidden text-[10px] font-bold">Staking Participation Rate </p>
                <p className="md:hidden text-[10px] font-bold text-right mt-[-4px]">%Date</p>
              </div>  
              <button className="border border-[#5851E8] font-bold py-1 px-2 text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF] ml-[4px]">
                M
              </button>
            </div>
            <StakingParticipationRateStackedAreaChart />
          </div>
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
      <div className="hidden md:block lg:hidden mt-12">
      </div>
    </>
  );
};
