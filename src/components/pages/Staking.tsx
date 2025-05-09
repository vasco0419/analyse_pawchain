"use client";

import React from "react";
import Image from "next/image"
import TotalStakedTokensRadialBarChart from "../charts/staking/TotalStakedTokensRadialBarChart";
import StakingAreaChart from "../charts/staking/StakingAreaChart";
import StakingRewardsLineChart from "../charts/staking/StakingRewardsLineChart";
import StakingParticipationRateStackedAreaChart from "../charts/staking/StakingParticipationRateStackedAreaChart";
import { PhoneHeader } from "./PhoneHeader";
import { PhoneFooter } from "./PhoneFooter";

export const Staking = () => {

  return (
    <>
      <PhoneHeader/>
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
          <span className="col-span-1 text-center text-[24px] font-bold">8</span>
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
      <PhoneFooter/>
      <div className="hidden md:block lg:hidden mt-12">
      </div>
    </>
  );
};
