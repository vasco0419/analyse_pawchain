"use client";

import React, { useEffect, useState } from "react";
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
import { PhoneFooter } from "./PhoneFooter";
import axios from "axios";
import { BACKEND_API_URL, WEEKDAY } from "@/app/config";
import { Arapey } from "next/font/google";

// Import the component dynamically, disabling SSR
const PAWTokensLockedPieChart = dynamic(() => import("../charts/summary/PAWTokensLockedPieChart"), { ssr: false });

export const Summary = () => {
  const [loading, setLoading] = useState(false);
  const [totalValueLocked, setTotalValueLocked] = useState(0);
  const [totalValueLocked24h, setTotalValueLocked24h] = useState(0);
  const [pawTokensLocked, setPawTokensLocked] = useState(0);
  const [pawTokensLocked24h, setPawTokensLocked24h] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [activeUsers24h, setActiveUsers24h] = useState(0);  
  const [totalBridgeVolume, setTotalBridgeVolume] = useState(0);
  const [totalBridgeVolume24h, setTotalBridgeVolume24h] = useState(0);
  const [liquidityHeld, setLiquidityHeld] = useState(0);
  const [liquidityHeld24h, setLiquidityHeld24h] = useState(0);
  const [pawPrice, setPawPrice] = useState(0);
  const [pawPrice24h, setPawPrice24h] = useState(0);
  const [pawPricePercent, setPawPricePercent] = useState(0);
  const [totalFeeGenerated, setTotalFeeGenerated] = useState(0);
  const [totalFeeGenerated24h, setTotalFeeGenerated24h] = useState(0);
  const [txCount, setTxCount] = useState(0);
  const [txCount24h, setTxCount24h] = useState(0);

  const [pawTokensLockedForPieChart, setPawTokensLockedForPieChart] = useState(Array<any>);
  const [txCountsForChart, setTxCoutsForChart] = useState(Array<any>);
  const [activeUsersForChart, setActiveUsersChart] = useState(Array<any>);
  const [totalFeesForChart, setTotalFeesForChart] = useState(Array<any>);
  const [totalValueTockedForChart, setTotalValueTockedForChart] = useState(Array<any>);
  const [totalBridgeVolumesForChart, setTotalBridgeVolumesForChart] = useState(Array<any>);
  const [liquidityHeldsForChart, setLiquidityHeldsForChart] = useState(Array<any>);
  const [pawPricesForChart, setPawPricesForChart] = useState(Array<any>);

  const numberToStrFunction = (num: number, fixed: number = 2): string => {
    const rounded = Math.round(num * 100) / 100;
    const str = rounded.toFixed(fixed);
    const [whole, decimals] = str.split(".");
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(decimals == "00") return `${withCommas}`;
    else return `${withCommas}.${decimals}`;
  };

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true); // Set loading true when the fetch starts
        await fetchData();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading false when the fetch finishes
      }
    };

    const fetchData = async() => {
      const result = await axios.get(`${BACKEND_API_URL}/getSummary`);
      
      setTotalValueLocked(result.data.tvl.latestTvl);
      setTotalValueLocked24h(result.data.tvl.latest24hTvl);
      setPawTokensLocked(result.data.tvl.latestPaw);
      setPawTokensLocked24h(result.data.tvl.latest24hPaw);
      setActiveUsers(result.data.activeUsers.latestUserCount);
      setActiveUsers24h(result.data.activeUsers.latest24hUserCount);
      setTotalBridgeVolume(result.data.totalBridgeVolume.latestBridgeVolume);
      setTotalBridgeVolume24h(result.data.totalBridgeVolume.latest24hBridgeVolume);
      setLiquidityHeld(result.data.tvl.latestLiquidityHeld);
      setLiquidityHeld24h(result.data.tvl.latest24hLiquidityHeld);
      setPawPrice(result.data.tvl.latestPawPrice * 1000000000);
      setPawPrice24h(result.data.tvl.latest24hPawPrice * 1000000000);
      setPawPricePercent(parseFloat(result.data.tvl.latest24hPawPrice) * 100 / (parseFloat(result.data.tvl.latestPawPrice)-parseFloat(result.data.tvl.latest24hPawPrice) == 0 ? parseFloat(result.data.tvl.latestPawPrice) : parseFloat(result.data.tvl.latestPawPrice)-parseFloat(result.data.tvl.latest24hPawPrice)));
      setTotalFeeGenerated(result.data.totalFeesGenerated.latestFeesVolume.usdFee);
      setTotalFeeGenerated24h(result.data.totalFeesGenerated.latest24hFeesVolume.usdFee);
      setTxCount(result.data.tvl.latestTx);
      setTxCount24h(result.data.tvl.latestTx24);

      setPawTokensLockedForPieChart(
      [
        { name: "Locked", value: result.data.tvl.latestPaw },
        { name: "UnLocked", value: 10000000000000000 - result.data.tvl.latestPaw}
      ])
      setTxCoutsForChart(result.data.tvl.txCountList);  
      setActiveUsersChart(result.data.activeUsers.activeUserCountList);
      let totalFees = [];
      let tvls = [];
      let totalBridgeVolumes = [];
      let liquidityHelds = [];
      let pawPrices = [];
      for(let i = 0; i < 7; i++){
         totalFees.push({time: result.data.totalFeesGenerated.feesVolumeList[i].time, volume: result.data.totalFeesGenerated.feesVolumeList[i].volume.usdFee})
         tvls.push({time: WEEKDAY[i], tvl: result.data.tvl.tvlList[i].tvlValue});
         totalBridgeVolumes.push({time: WEEKDAY[i], volume: result.data.totalBridgeVolume.bridgeVolumeList[i]});
         liquidityHelds.push({time: WEEKDAY[i], value: result.data.tvl.tvlList[i].liquidityHeld});
         pawPrices.push({time: WEEKDAY[i], price: result.data.tvl.tvlList[i].pawPrice * 1000000000});
      }
      setTotalFeesForChart(totalFees);
      setTotalValueTockedForChart(tvls);
      setTotalBridgeVolumesForChart(totalBridgeVolumes);
      setLiquidityHeldsForChart(liquidityHelds);
      setPawPricesForChart(pawPrices);
    };

    init();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);
  
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
      {
        loading && 
          <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div role="status">
                  <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span className="sr-only">Loading...</span>
              </div>
          </div>
      }
      {
        !loading && 
        <>
          <div className="md:overflow-x-auto custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-[20px] md:min-w-[1280px] md:mb-4 lg:mb-0">
              {/* Total Value Locked */}
              <div className="col-span-1">
                <div className="flex flex-col px-6 py-5 gradient-box">
                  <span className="font-bold text-[24px]">Total Value Locked</span>
                  <span className="font-bold text-[16px] mt-[25px]">$ {numberToStrFunction(totalValueLocked)}</span>
                  <div className="flex flex-row justify-between mt-2">
                    <span className="text-[10px]">+ $ {numberToStrFunction(totalValueLocked24h)}</span>
                    <span className="text-[10px]">Last 24h</span>
                  </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 pb-2">
                  <div className="flex flex-col">
                    <div className="text-right mb-[10px] px-3">
                      <span className="text-[10px]">TVL Last 7 Days - Millions</span>
                    </div>
                    <TvlLineChart data={totalValueTockedForChart}/>
                  </div>
                </div>
              </div>
  
              {/* PAW Tokens Locked */}
              <div className="col-span-1">
                <div className="flex flex-col px-6 py-5 gradient-box">
                  <span className="font-bold text-[24px]">PAW Tokens Locked</span>
                  <span className="font-bold text-[16px] mt-[25px]">{numberToStrFunction(pawTokensLocked)}</span>
                  <div className="flex flex-row justify-between mt-2">
                    <span className="text-[10px]">+ {numberToStrFunction(pawTokensLocked24h)}</span>
                    <span className="text-[10px]">Last 24h</span>
                  </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 py-2">
                  <div className="flex flex-col">
                    <div className="text-center px-3">
                      <span className="text-[10px]">Locked</span>
                    </div>
                    <PAWTokensLockedPieChart data={pawTokensLockedForPieChart}/>
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
                  <span className="font-bold text-[16px] mt-[25px]">{numberToStrFunction(txCount)}</span>
                  <div className="flex flex-row justify-between mt-2">
                    <span className="text-[10px]">+ {numberToStrFunction(txCount24h)}</span>
                    <span className="text-[10px]">Last 24h</span>
                  </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 pb-2">
                  <div className="flex flex-col">
                    <div className="text-right mb-[10px] px-3">
                      <span className="text-[10px]">Tx Count Last 7 Days - Thousands</span>
                    </div>
                    <TransactionCountLineChart data={txCountsForChart}/>
                  </div>
                </div>
              </div>
  
              {/* Active Users */}
              <div className="col-span-1">
                <div className="flex flex-col px-6 py-5 gradient-box">
                  <span className="font-bold text-[24px]">Active Users</span>
                    <span className="font-bold text-[16px] mt-[25px]">{activeUsers}</span>
                    <div className="flex flex-row justify-between mt-2">
                      <span className="text-[10px]">+ {activeUsers24h} </span>
                      <span className="text-[10px]">Last 24h</span>
                    </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 pb-2">
                  <div className="flex flex-col">
                    <div className="text-right mb-[10px] px-3">
                      <span className="text-[10px]">Active Users Last 7 Days - Thousands </span>
                    </div>
                    <ActiveUsersLineChart data={activeUsersForChart}/>
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
                  <span className="font-bold text-[16px] mt-[25px]">$ {numberToStrFunction(totalBridgeVolume)}</span>
                  <div className="flex flex-row justify-between mt-2">
                    <span className="text-[10px]">{totalBridgeVolume24h >= 0 ? '+' : '-'}$ {numberToStrFunction(totalBridgeVolume24h)}</span>
                    <span className="text-[10px]"></span>
                  </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 pb-2">
                  <div className="flex flex-col">
                    <div className="text-right mb-[10px] px-3">
                      <span className="text-[10px]">Bridge Volume Last 7 Days - Thousand </span>
                    </div>
                    <TotalBridgeVolumeLineChart data={totalBridgeVolumesForChart}/>
                  </div>
                </div>
              </div>
  
              {/* Liquidity Held */}
              <div className="col-span-1">
                <div className="flex flex-col px-6 py-5 gradient-box">
                  <span className="font-bold text-[24px]">Liquidity Held</span>
                  <span className="font-bold text-[16px] mt-[25px]">$ {numberToStrFunction(liquidityHeld)}</span>
                  <div className="flex flex-row justify-between mt-2">
                    <span className="text-[10px]">{liquidityHeld24h >= 0 ? '+' : '-'}$ {numberToStrFunction(liquidityHeld24h)}</span>
                    <span className="text-[10px]"></span>
                  </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 pb-2">
                  <div className="flex flex-col">
                    <div className="text-right mb-[10px] px-3">
                      <span className="text-[10px]">Liquidity Held Last 7 Days</span>
                    </div>
                    <LiquidityHeldLineChart data={liquidityHeldsForChart}/>
                  </div>
                </div>
              </div>
  
              {/* PAW Token Price */}
              <div className="col-span-1">
                <div className="flex flex-col px-6 py-5 gradient-box">
                  <span className="font-bold text-[24px]">PAW Token Price</span>
                  <span className="font-bold text-[16px] mt-[25px]">$ {pawPrice} 1.e+9</span>
                  <div className="flex flex-row justify-between mt-2">
                    <span className="text-[10px]">{pawPricePercent >= 0 ? '+' : '-'} {numberToStrFunction(pawPricePercent, 5)}% ${numberToStrFunction(pawPrice24h, 5)} 1.e+9</span>
                    <span className="text-[10px]">Last 24h</span>
                  </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 pb-2">
                  <div className="flex flex-col">
                    <div className="text-right mb-[10px] px-3">
                      <span className="text-[10px]">Paw Token Price(1.e+9) Last 7 Days</span>
                    </div>
                    <PAWTokenPriceLineChart data={pawPricesForChart}/>
                  </div>
                </div>
              </div>
  
              {/* Total Fees Generated */}
              <div className="col-span-1">
                <div className="flex flex-col px-6 py-5 gradient-box">
                  <span className="font-bold text-[24px]">Total Fees Generated</span>
                  <span className="font-bold text-[16px] mt-[25px]">$ {numberToStrFunction(totalFeeGenerated)}</span>
                  <div className="flex flex-row justify-between mt-2">
                    <span className="text-[10px]">{totalFeeGenerated24h > 0 ? '+':'-'}$ {numberToStrFunction(totalFeeGenerated24h)}</span>
                    <span className="text-[10px]">Last 24h</span>
                  </div>
                </div>
                <div className="mt-[20px] gradient-box px-3 pb-2">
                  <div className="flex flex-col">
                    <div className="text-right mb-[10px] px-3">
                      <span className="text-[10px]">Total Fees Generated Last 7 Days </span>
                    </div>
                    <TotalFeesLineChart data={totalFeesForChart}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PhoneFooter/>
        </>
      }
      <div className="hidden md:block lg:hidden mt-12">
      </div>
    </>
  );
};
