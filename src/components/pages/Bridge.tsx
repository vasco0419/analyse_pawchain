"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"
import BridgeFeeBarChart from "../charts/bridge/BridgeFeeBarChart";
import BridgeVolumeChart from "../charts/bridge/BridgeVolumeBarChart";
import { PhoneHeader } from "./PhoneHeader";
import { PhoneFooter } from "./PhoneFooter";
import axios from "axios";
import { BACKEND_API_URL } from "@/app/config";

export const Bridge = () => {
  const [loading, setLoading] = useState(false);
  const [totalLocked, setTotalLocked] = useState(0);
  const [pawLocked, setPawLocked] = useState(0)
  const [ethLocked, setEthLocked] = useState(0);
  const [bnbLocked, setBNBLocked] = useState(0);
  const [usdcLocked, setUsdcLocked] = useState(0);
  const [totalBridgeFees, setTotalBridgeFees] = useState(0);
  const [todayBridgeFees, setTodayBridgeFees] = useState(0);
  const [total24hBridgeInVolume, setTotal24hBridgeInVolume] = useState(0);
  const [total24hBridgeOutVolume, setTotal24hBridgeOutVolume] = useState(0);
  const [total7dBridgeInVolume, setTotal7dBridgeInVolume] = useState(0);
  const [total7dBridgeOutVolume, setTotal7dBridgeOutVolume] = useState(0);
  const [bridgeFeeList, setBridgeFeeList] = useState(Array<any>);
  const [bridgeVolumeList, setBridgeVolumeList] = useState(Array<any>);

  const numberToStrFunction = (num: number, fixed: number = 2): string => {
    const rounded = Math.round(num * 100) / 100;
    const str = rounded.toFixed(fixed);
    const [whole, decimals] = str.split(".");
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(decimals == "00") return `${withCommas}`;
    else return `${withCommas}.${decimals}`;
  };

  const convertPhoneResponsiveData = (value: string): string => {
    let number = parseFloat(value);
    number = Math.round(number * 100) / 100;
    let tmpStr = "";
    let flag = "";
    if(number > 999999999){
        tmpStr = (number / 1000000000).toFixed(2) + "";
        flag = "G";
    }
    else if(number > 999999){
        tmpStr = (number / 1000000).toFixed(2) + "";
        flag = "M"
    } 
    else if(number > 999) {
        tmpStr = (number / 1000).toFixed(2) + "";
        flag = "K";
    }
    else{
        tmpStr = number.toFixed(2) + "";
    }
    const [whole, decimals] = tmpStr.split(".");
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${withCommas}.${decimals}` + flag; 
  }

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios.get(`${BACKEND_API_URL}/getBridge`);
      setTotalLocked(result.data.bridgeData.totalValueLocked);
      setPawLocked(result.data.bridgeData.totalPawLocked);
      setEthLocked(result.data.bridgeData.latestEachTvl[0].totalNativeValue + result.data.bridgeData.latestEachTvl[0].totalUsdcValue);
      setBNBLocked(result.data.bridgeData.latestEachTvl[1].totalNativeValue + result.data.bridgeData.latestEachTvl[1].totalUsdcValue);
      let totalUsdc = 0;
      for(let i = 0; i < result.data.bridgeData.latestEachTvl.length; i++){
        totalUsdc += result.data.bridgeData.latestEachTvl[i].totalUsdcValue;
      }
      setUsdcLocked(totalUsdc);
      setTotalBridgeFees(result.data.bridgeData.totalBridgeFees.usdFee);
      setTodayBridgeFees(result.data.bridgeData.todayBridgeFees.usdFee);
      setTotal24hBridgeInVolume(result.data.bridgeData.total24hBridgeInVolume);
      setTotal7dBridgeInVolume(result.data.bridgeData.total7dBridgeInVolume);
      setTotal24hBridgeOutVolume(result.data.bridgeData.total24hBridgeOutVolume);
      setTotal7dBridgeOutVolume(result.data.bridgeData.total7dBridgeOutVolume);

      let bridgeFees = [];
      let bridgeVolumes = [];
      for(let i = result.data.bridgeData.totalBridgeFeeList.length - 1; i >=0; i--){
         bridgeFees.push({month:result.data.bridgeData.totalBridgeFeeList[i].month,  Fee: result.data.bridgeData.totalBridgeFeeList[i].bridgeFee.usdFee});
         bridgeVolumes.push({month:result.data.bridgeData.totalBridgeVolumeList[i].month,  inflow: result.data.bridgeData.totalBridgeVolumeList[i].bridgeVolume.totalBridgeIn, outflow: -1*(result.data.bridgeData.totalBridgeVolumeList[i].bridgeVolume.totalBridgeOut)});
      }
      setBridgeFeeList(bridgeFees);
      setBridgeVolumeList(bridgeVolumes);
    };
    const init = async() => {
      try {
        setLoading(true); // Set loading true when the fetch starts
        await fetchData();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading false when the fetch finishes
      }
    }

    init();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PhoneHeader/>
      <div className="md:hidden flex flex-row justify-center items-center">
          <span className="font-bold text-[36px]">Bridge</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Bridge</span>
      </div>
      {loading && 
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
      {!loading && 
      <>
        <div className="overflow-x-auto custom-scrollbar mb-4 lg:mb-0">
          <div className="grid grid-cols-5 mt-4 mb-4 gap-[20px] min-w-[1280px] md:min-w-[1280px] lg:min-w-[0px]">
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
                <span className="font-bold text-[10px]">Total Liquidity Locked in Bridges</span>
                <span className="font-bold text-[24px] mt-[2px]">$ {numberToStrFunction(totalLocked)}</span>
            </div>
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                    <Image
                        src="/images/vector.png"
                        alt="token"
                        width={76.05}
                        height={85.07}
                      />
                  <div className="flex flex-col justify-center items-center mt-5">
                    <span className="font-bold text-[16px]">PAW</span>
                    <span className="font-bold text-[16px] mt-[2px]">$ {numberToStrFunction(pawLocked)}</span>
                  </div> 
              </div>
            </div>
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                  <Image
                      src="/images/eth.png"
                      alt="token"
                      width={52.43}
                      height={85.39}
                    />
                  <div className="flex flex-col justify-center items-center mt-5">
                    <span className="font-bold text-[16px]">ETH</span>
                    <span className="font-bold text-[16px] mt-[2px]">$ {numberToStrFunction(ethLocked)}</span>
                  </div> 
                </div>    
            </div>
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                  <Image
                      src="/images/vector1.png"
                      alt="token"
                      width={76.05}
                      height={85.39}
                    />
                  <div className="flex flex-col justify-center items-center mt-5">
                    <span className="font-bold text-[16px]">BNB</span>
                    <span className="font-bold text-[16px] mt-[2px]">$ {numberToStrFunction(bnbLocked)}</span>
                  </div> 
                </div>    
            </div>
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                  <Image
                      src="/images/usd.png"
                      alt="token"
                      width={85.27}
                      height={85.27}
                    />
                  <div className="flex flex-col justify-center items-center mt-5">
                    <span className="font-bold text-[16px]">USDC</span>
                    <span className="font-bold text-[16px] mt-[2px]">$ {numberToStrFunction(usdcLocked)}</span>
                  </div> 
                </div>  
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gradient-box">
          <div className="grid gird-cols-1 md:grid-cols-5">
              <div className="hidden col-span-1 md:flex flex-col justify-center items-center">
                <span className="font-bold text-[10px]">Total Bridge Fees</span>
                <span className="font-bold text-[24px] mt-[2px]">$ {numberToStrFunction(totalBridgeFees)}</span>
                <span className="font-bold text-[10px] mt-[20px]">Total Bridge Fees Today</span>
                <span className="font-bold text-[24px] mt-[2px]">$ {numberToStrFunction(todayBridgeFees)}</span>
              </div>
              <div className="flex md:hidden flex-row justify-between items-center">
                <div>
                  <p className="font-bold text-[10px] text-center">Total Bridge Fees</p>
                  <p className="font-bold text-[24px] mt-[2px] text-center">$ {convertPhoneResponsiveData(totalBridgeFees+"")}</p>
                </div>
                <div>
                  <p className="font-bold text-[10px] text-center">Total Bridge Fees Today</p>
                  <p className="font-bold text-[24px] mt-[2px] text-center">$ {convertPhoneResponsiveData(todayBridgeFees+"")}</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-4 gap-[20px] mt-5">
                <BridgeFeeBarChart data={bridgeFeeList}/>
              </div>  
          </div>
        </div>

        {/* mobile responsive */}
        <div className="md:hidden grid grid-cols-2 mt-4">
          <div className="col-span-1 gradient-box mr-2">
            <p className="font-bold text-[8px] sm:text-[10px]">Total Bridge In(24h)</p>
            <p className="font-bold text-[20px]">$ {convertPhoneResponsiveData(total24hBridgeInVolume + "")}</p>
          </div>
          <div className="col-span-1 gradient-box ml-2">
            <p className="font-bold text-[8px] sm:text-[10px]">Total Bridge  In(7d)</p>
            <p className="font-bold text-[20px]">$ {convertPhoneResponsiveData(total7dBridgeInVolume + "")}</p>
          </div>
        </div>
        <div className="md:hidden grid grid-cols-2 mt-4">
          <div className="col-span-1 gradient-box mr-2">
            <p className="font-bold text-[8px] sm:text-[10px]">Total Bridge Out(24h)</p>
            <p className="font-bold text-[20px]">$ {convertPhoneResponsiveData(total24hBridgeOutVolume + "")}</p>
          </div>
          <div className="col-span-1 gradient-box ml-2">
            <p className="font-bold text-[8px] sm:text-[10px]">Total Bridge Out(7d)</p>
            <p className="font-bold text-[20px]">$ {convertPhoneResponsiveData(total7dBridgeOutVolume + "")}</p>
          </div>
        </div>
        {/* mobile responsive*/}
        
        <div className="grid grid-cols-1 gradient-box mt-4">
          <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-1 hidden md:flex flex-col justify-center items-center">
                <span className="font-bold text-[10px]">Total Bridge In(24h)</span>
                <span className="font-bold text-[24px] mt-[2px]">$ {numberToStrFunction(total24hBridgeInVolume)}</span>
                <span className="font-bold text-[10px] mt-[10px]">Total Bridge In(7d)</span>
                <span className="font-bold text-[24px] mt-[2px]">$ {numberToStrFunction(total7dBridgeInVolume)}</span>
                <span className="font-bold text-[10px] mt-[10px]">Total Bridge Out(24h)</span>
                <span className="font-bold text-[24px] mt-[2px]">$ {numberToStrFunction(total24hBridgeOutVolume)}</span>
                <span className="font-bold text-[10px] mt-[10px]">Total Bridge Out(7d)</span>
                <span className="font-bold text-[24px] mb-[2px]">$ {numberToStrFunction(total7dBridgeOutVolume)}</span>
              </div>
              <div className="col-span-1 md:col-span-4 gap-[20px] mt-5">
                <BridgeVolumeChart data={bridgeVolumeList}/>
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
}