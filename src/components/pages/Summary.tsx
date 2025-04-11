"use client";

import React from "react";
import Image from "next/image"
import dynamic from "next/dynamic";

import TvlLineChart from "../charts/summary/TvlLineChart";
import TransactionCountLineChart from "../charts/summary/TransactionCountLineChart";
import ActiveUsersLineChart from "../charts/summary/ActiveUsersLineChart";
import TotalBridgeVolumeLineChart from "../charts/summary/TotalBridgeVolumeLineChart";
import LiquidityHeldLineChart from "../charts/summary/LiquidityHeldLineChart";
import PAWTokenPriceLineChart from "../charts/summary/PAWTokenPriceLineChart";
import TotalFeesLineChart from "../charts/summary/TotalFeesLineChart";
import { PhoneHeader } from "./PhoneHeader";

// Import the component dynamically, disabling SSR
const PAWTokensLockedPieChart = dynamic(() => import("../charts/summary/PAWTokensLockedPieChart"), { ssr: false });

export const Summary = () => {

  return (
    <>
      <PhoneHeader/>
      <div className="md:hidden flex flex-row justify-center items-center">
        <span className="font-bold text-[36px]">Summary</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Summary</span>
      </div>
      <div className="md:overflow-x-auto custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-[20px] md:min-w-[1280px] md:mb-4 lg:mb-0">
          {/* Total Value Locked */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">Total Value Locked</span>
              <span className="font-bold text-[16px] mt-[25px]">$ 4,233,584,483.02</span>
              <div className="flex flex-row justify-between mt-2">
                <span className="text-[10px]">+ $ 2,550,272</span>
                <span className="text-[10px]">Last 24h</span>
              </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 pb-2">
              <div className="flex flex-col">
                <div className="text-right mb-[10px] px-3">
                  <span className="text-[10px]">TVL Last 7 Days - Millions</span>
                </div>
                <TvlLineChart />
              </div>
            </div>
          </div>

          {/* PAW Tokens Locked */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">PAW Tokens Locked</span>
              <span className="font-bold text-[16px] mt-[25px]">723,000,231,987.02</span>
              <div className="flex flex-row justify-between mt-2">
                <span className="text-[10px]">+ 1,744,645,110.02</span>
                <span className="text-[10px]">Last 24h</span>
              </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 py-2">
              <div className="flex flex-col">
                <div className="text-center px-3">
                  <span className="text-[10px]">Locked</span>
                </div>
                <PAWTokensLockedPieChart />
                <div className="text-center px-3">
                  <span className="text-[10px]">Unlocked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Count */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">Transaction Count</span>
              <span className="font-bold text-[16px] mt-[25px]">20,730,213,441</span>
              <div className="flex flex-row justify-between mt-2">
                <span className="text-[10px]">+ 723,851</span>
                <span className="text-[10px]">Last 24h</span>
              </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 pb-2">
              <div className="flex flex-col">
                <div className="text-right mb-[10px] px-3">
                  <span className="text-[10px]">Tx Count Last 7 Days - Thousands</span>
                </div>
                <TransactionCountLineChart />
              </div>
            </div>
          </div>

          {/* Active Users */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">Active Users</span>
                <span className="font-bold text-[16px] mt-[25px]">43,022,612</span>
                <div className="flex flex-row justify-between mt-2">
                  <span className="text-[10px]">+ 320,159 </span>
                  <span className="text-[10px]">Last 24h</span>
                </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 pb-2">
              <div className="flex flex-col">
                <div className="text-right mb-[10px] px-3">
                  <span className="text-[10px]">Active Users Last 7 Days - Thousands </span>
                </div>
                <ActiveUsersLineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:overflow-x-auto custom-scrollbar">  
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-[20px] md:min-w-[1280px]  md:mb-4 lg:mb-0">
          {/* Total Bridge Volume */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">Total Bridge Volume</span>
              <span className="font-bold text-[16px] mt-[25px]">$ 4,233,584,483.02</span>
              <div className="flex flex-row justify-between mt-2">
                <span className="text-[10px]">$ 2,343,019</span>
                <span className="text-[10px]"></span>
              </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 pb-2">
              <div className="flex flex-col">
                <div className="text-right mb-[10px] px-3">
                  <span className="text-[10px]">Bridge Volume Last 7 Days - Thousand </span>
                </div>
                <TotalBridgeVolumeLineChart />
              </div>
            </div>
          </div>

          {/* Liquidity Held */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">Liquidity Held</span>
              <span className="font-bold text-[16px] mt-[25px]">$ 163,509,138</span>
              <div className="flex flex-row justify-between mt-2">
                <span className="text-[10px]">+ $ 4,782,012</span>
                <span className="text-[10px]"></span>
              </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 pb-2">
              <div className="flex flex-col">
                <div className="text-right mb-[10px] px-3">
                  <span className="text-[10px]">TVL Last 7 Days</span>
                </div>
                <LiquidityHeldLineChart />
              </div>
            </div>
          </div>

          {/* PAW Token Price */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">PAW Token Price</span>
              <span className="font-bold text-[16px] mt-[25px]">$ 0.00004521</span>
              <div className="flex flex-row justify-between mt-2">
                <span className="text-[10px]">-2% $0.00004611</span>
                <span className="text-[10px]">Last 24h</span>
              </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 pb-2">
              <div className="flex flex-col">
                <div className="text-right mb-[10px] px-3">
                  <span className="text-[10px]">TVL Last 7 Days</span>
                </div>
                <PAWTokenPriceLineChart />
              </div>
            </div>
          </div>

          {/* Total Fees Generated */}
          <div className="col-span-1">
            <div className="flex flex-col px-6 py-5 gradient-box">
              <span className="font-bold text-[24px]">Total Fees Generated</span>
              <span className="font-bold text-[16px] mt-[25px]">$ 36,021,756</span>
              <div className="flex flex-row justify-between mt-2">
                <span className="text-[10px]">+ $ 87,021</span>
                <span className="text-[10px]">Last 24h</span>
              </div>
            </div>
            <div className="mt-[20px] gradient-box px-3 pb-2">
              <div className="flex flex-col">
                <div className="text-right mb-[10px] px-3">
                  <span className="text-[10px]">TVL Last 7 Days </span>
                </div>
                <TotalFeesLineChart />
              </div>
            </div>
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
