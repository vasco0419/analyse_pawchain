"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"
import ServiceFessChart from "../charts/paw_wallet_naming_service/ServiceFeesChart";
import TransactionTable from "../charts/paw_wallet_naming_service/TransactionTable";
import { PhoneHeader } from "./PhoneHeader";
import { PhoneFooter } from "./PhoneFooter";
import { BACKEND_API_URL, WEEKDAY } from "@/app/config";
import axios from "axios";

export const PawWalletNamingService = () => {
  const [loading, setLoading] = useState(false);
  const [uniqueWalletNameSold, setUniqueWalletNameSold] = useState("");
  const [totalWalletNameSold, setTotalWalletNameSold] = useState("");
  const [walletNameRenewed, setWalletNameRenewed] = useState("");
  const [todayWalletNameProvided, setTodayWalletNameProvided] = useState("");
  const [txRecord, setTxRecord] = useState(Array<any>);
  const [feeCollected, setFeeCollected] = useState("");
  const [pawFeeList, setPawFeeList] = useState(Array<any>);

  const numberToStrFunction = (num: number, fixed: number = 2): string => {
    const rounded = Math.round(num * 100) / 100;
    const str = rounded.toFixed(fixed);
    const [whole, decimals] = str.split(".");
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(decimals == "00" || fixed == 0) return `${withCommas}`;
    else return `${withCommas}.${decimals}`;
  };

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios.get(`${BACKEND_API_URL}/getPawWalletNamingService`);
      console.log(result);
      setUniqueWalletNameSold(numberToStrFunction(result.data.data.uniqueWalletNameSold.length, 0));
      setTotalWalletNameSold(numberToStrFunction(result.data.data.totalWalletNameSold.length, 0));
      setWalletNameRenewed(numberToStrFunction(result.data.data.walletNamesRenewed, 0));
      setTodayWalletNameProvided(numberToStrFunction(result.data.data.todayWalletSold.length));
      setFeeCollected(numberToStrFunction(result.data.data.pawFeeCollected));
      let feeChartData = [];
      for(let i = 0; i < result.data.data.pawFeeList.length; i++){
         feeChartData.push({time: WEEKDAY[i], Fee: result.data.data.pawFeeList[i]});
      }
      setPawFeeList(feeChartData);
      setTxRecord(result.data.data.txRecord);  
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
          <span className="font-bold text-[24px]">Wallet Naming Service</span>
      </div> 
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Paw Wallet Naming Service</span>
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
        !loading && <>
            <div className="overflow-x-auto custom-scrollbar mb-4 lg:mb-0">
              <div className="grid grid-cols-3 mt-4 mb-4 gap-[20px] min-w-[900px] md:min-w-[0px]">
                  <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
                      <span className="font-bold md:font-thin lg:font-bold text-[16px] md:text-[15px] lg:text-[16px]">Unique Wallet Names Sold</span>
                      <span className="font-bold text-[24px] mt-[2px]">{uniqueWalletNameSold}</span>
                  </div>
                  <div className="col-span-1 gradient-box flex flex-col justify-center items-center"> 
                      <span className="font-bold md:font-thin lg:font-bold text-[16px] md:text-[15px] lg:text-[16px]">Wallet Names Renewed</span>
                      <span className="font-bold text-[24px] mt-[2px]">{walletNameRenewed}</span>     
                  </div>
                  <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
                      <span className="font-bold md:font-thin lg:font-bold text-[16px] md:text-[15px] lg:text-[16px]">Total Wallet Names Sold</span>
                      <span className="font-bold text-[24px] mt-[2px]">{totalWalletNameSold}</span>
                    </div> 
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-4 gap-[20px]">
                <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
                    <span className="font-bold text-[16px]">Fees Collected Over Time</span>
                    <span className="font-bold text-[24px] mt-[2px]">{feeCollected} PAW</span>
                </div>
                <div className="col-span-1 gradient-box flex flex-col justify-center items-center"> 
                    <span className="font-bold text-[16px]">Today&apos;s Wallet Names Provied</span>
                    <span className="font-bold text-[24px] mt-[2px]">{todayWalletNameProvided}</span>     
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-4 gap-[20px]">
                <div className="col-span-1 gradient-box"> 
                  <ServiceFessChart data={pawFeeList}/>
                </div>
                <div className="col-span-1 gradient-box1">
                  <TransactionTable data={txRecord}/>
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