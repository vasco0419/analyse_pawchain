"use client";

import React from "react";
import Image from "next/image"
import ServiceFessChart from "../charts/paw_wallet_naming_service/ServiceFeesChart";
import TransactionTable from "../charts/paw_wallet_naming_service/TransactionTable";
import { PhoneHeader } from "./PhoneHeader";

export const PawWalletNamingService = () => {
  return (
    <>
      <PhoneHeader/>
      <div className="md:hidden flex flex-row justify-center items-center">
          <span className="font-bold text-[32px]">Wallet Naming Service</span>
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

      <div className="overflow-x-auto custom-scrollbar mb-4 lg:mb-0">
        <div className="grid grid-cols-3 mt-4 mb-4 gap-[20px] min-w-[900px] md:min-w-[0px]">
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
                <span className="font-bold md:font-thin lg:font-bold text-[16px] md:text-[15px] lg:text-[16px]">Unique Wallet Names Sold</span>
                <span className="font-bold text-[24px] mt-[2px]">7263</span>
            </div>
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center"> 
                <span className="font-bold md:font-thin lg:font-bold text-[16px] md:text-[15px] lg:text-[16px]">Wallet Names Renewed</span>
                <span className="font-bold text-[24px] mt-[2px]">1207</span>     
            </div>
            <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
                <span className="font-bold md:font-thin lg:font-bold text-[16px] md:text-[15px] lg:text-[16px]">Total Wallet Names Sold</span>
                <span className="font-bold text-[24px] mt-[2px]">8470</span>
              </div> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-4 gap-[20px]">
          <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
              <span className="font-bold text-[16px]">Fees Collected Over Time</span>
              <span className="font-bold text-[24px] mt-[2px]">52,413,506,998,930</span>
          </div>
          <div className="col-span-1 gradient-box flex flex-col justify-center items-center"> 
              <span className="font-bold text-[16px]">Today&apos;s Wallet Names Provied</span>
              <span className="font-bold text-[24px] mt-[2px]">12</span>     
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-4 gap-[20px]">
          <div className="col-span-1 gradient-box"> 
             <ServiceFessChart/>
          </div>
          <div className="col-span-1 gradient-box1">
             <TransactionTable/>
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
}