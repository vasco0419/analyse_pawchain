"use client";

import React from "react";
import Image from "next/image"
import BridgeFeeBarChart from "../charts/bridge/BridgeFeeBarChart";
import BridgeVolumeChart from "../charts/bridge/BridgeVolumeBarChart";

export const Bridge = () => {
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
      <div className="overflow-x-auto custom-scrollbar mb-4 lg:mb-0">
        <div className="grid grid-cols-5 mt-4 mb-4 gap-[20px] min-w-[1280px] md:min-w-[1280px] lg:min-w-[0px]">
          <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
              <span className="font-bold text-[10px]">Total Liquidity Locked in Bridges</span>
              <span className="font-bold text-[24px] mt-[2px]">$ 14,211,958.4</span>
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
                  <span className="font-bold text-[16px] mt-[2px]">$ 14,211,958.4</span>
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
                  <span className="font-bold text-[16px] mt-[2px]">$ 14,211,958.4</span>
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
                  <span className="font-bold text-[16px] mt-[2px]">$ 14,211,958.4</span>
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
                  <span className="font-bold text-[16px] mt-[2px]">$ 14,211,958.4</span>
                </div> 
              </div>  
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gradient-box">
         <div className="grid gird-cols-1 md:grid-cols-5">
            <div className="hidden col-span-1 md:flex flex-col justify-center items-center">
              <span className="font-bold text-[10px]">Total Bridge Fees</span>
              <span className="font-bold text-[24px] mt-[2px]">$ 53,210,373</span>
              <span className="font-bold text-[10px] mt-[20px]">Total Bridge Fees Today</span>
              <span className="font-bold text-[24px] mt-[2px]">$ 3,210.897</span>
            </div>
            <div className="flex md:hidden flex-row justify-between items-center">
               <div>
                <p className="font-bold text-[10px] text-center">Total Bridge Fees</p>
                <p className="font-bold text-[24px] mt-[2px] text-center">$ 53,210,373</p>
               </div>
               <div>
                <p className="font-bold text-[10px] text-center">Total Bridge Fees Today</p>
                <p className="font-bold text-[24px] mt-[2px] text-center">$ 3,210.897</p>
               </div>
            </div>
            <div className="col-span-1 md:col-span-4 gap-[20px] mt-5">
               <BridgeFeeBarChart/>
            </div>  
         </div>
      </div>

      {/* mobile responsive */}
      <div className="md:hidden grid grid-cols-2 mt-4">
        <div className="col-span-1 gradient-box mr-2">
          <p className="font-bold text-[10px]">Total Bridge In(24h)</p>
          <p className="font-bold text-[24px]">$ 15.2M</p>
        </div>
        <div className="col-span-1 gradient-box ml-2">
          <p className="font-bold text-[10px]">Total Bridge In(7d)</p>
          <p className="font-bold text-[24px]">$ 530M</p>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-2 mt-4">
        <div className="col-span-1 gradient-box mr-2">
          <p className="font-bold text-[10px]">Total Bridge Out(24h)</p>
          <p className="font-bold text-[24px]">$ 7.3M</p>
        </div>
        <div className="col-span-1 gradient-box ml-2">
          <p className="font-bold text-[10px]">Total Bridge Out(7d)</p>
          <p className="font-bold text-[24px]">$ 122M</p>
        </div>
      </div>
      {/* mobile responsive*/}
      
      <div className="grid grid-cols-1 gradient-box mt-4">
         <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-1 hidden md:flex flex-col justify-center items-center">
              <span className="font-bold text-[10px]">Total Bridge In(24h)</span>
              <span className="font-bold text-[24px] mt-[2px]">$ 15,220,512</span>
              <span className="font-bold text-[10px] mt-[10px]">Total Bridge In(7d)</span>
              <span className="font-bold text-[24px] mt-[2px]">$ 530,000,000</span>
              <span className="font-bold text-[10px] mt-[10px]">Total Bridge Out(24h)</span>
              <span className="font-bold text-[24px] mt-[2px]">$ 7,312,000</span>
              <span className="font-bold text-[10px] mt-[10px]">Total Bridge Out(7d)</span>
              <span className="font-bold text-[24px] mb-[2px]">$ 122,231,233</span>
            </div>
            <div className="col-span-1 md:col-span-4 gap-[20px] mt-5">
               <BridgeVolumeChart/>
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
}