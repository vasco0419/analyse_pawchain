"use client";

import React from "react";
import Image from "next/image"
import MarketCapChart from "../charts/paw_token_info/MarketCapChart";

export const PawTokenInfo = () => {
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
          <span className="font-bold text-[36px]">Paw Token Info</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Paw Token Info</span>
      </div>
      <div className="hidden md:flex justify-between items-center gradient-box mt-4"> 
        <span className="font-bold text-[24px]">Paw Total Supply</span>
        <span className="text-[24px]">1,000,000,000,000,000</span>
      </div>
      <div className="md:hidden grid grid-cols-1 justify-center items-center gradient-box mt-4"> 
        <p className="font-bold text-[24px] text-center">Paw Total Supply</p>
        <p className="text-[24px] text-center">1,000,000,000,000,000</p>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <div className="flex justify-between min-w-[1024px] lg:min-w-[0px]">
          <div className="grid grid-cols-4 mt-4 gap-[21px] w-full mb-4 lg:mb-0">
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 gradient-box">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/eth_item.png"
                      alt="token"
                      width={20.26}
                      height={33}
                    />
                    <div className="grid grid-cols-1">
                      <span className="text-[16px] text-right">ETH</span>
                      <span className="text-[16px] text-right">$1705,434.56</span>
                    </div>
                  </div>
              </div>
          </div>
          <div className="hidden xl:grid grid-cols-1 ml-4 mt-4 gap-[21px]">
              <div className="col-span-1 flex flex-row justify-between items-center mr-4">
                  <Image
                    src="/images/move.png"
                    alt="token"
                    width={47}
                    height={47}
                  />
              </div>
              <div className="col-span-1 flex flex-row justify-between items-center mr-4">
                  <Image
                    src="/images/move.png"
                    alt="token"
                    width={47}
                    height={47}
                  />
              </div>
          </div>  
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gradient-box mt-4"> 
        <span className="font-bold text-[24px] text-center">Paw Tokens distributed across multiple networks</span>
      </div>

      <div className="hidden md:flex flex-row justify-between items-center gradient-box mt-4"> 
        <span className="font-bold text-[16px]">Paw Tokens in Burn Wallet</span>
        {/* <span className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500">pawxdEad00......0DEad</span> */}
        <span
          className="font-bold text-[16px]"
          style={{
            background: 'linear-gradient(to right, #D3D6FF, #5851E8)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          pawxdEad00........0dEaD
        </span>
        <span className="font-bold text-[16px]">1,030,443,112,665.02</span>
      </div> 
      <div className="md:hidden grid grid-cols-1 justify-between items-center gradient-box mt-4">
          <p className="font-bold text-[16px] text-center">Paw Tokens in Burn Wallet</p>
          <p
            className="font-bold text-[16px] mt-2 text-center"
            style={{
              background: 'linear-gradient(to right, #D3D6FF, #5851E8)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            pawxdEad00........0dEaD
          </p>
          <p className="font-bold text-[16px] mt-2 text-center">1,030,443,112,665.02</p>
      </div>         
      <div className="grid grid-cols-1 gradient-box mt-4 gap-[20px]"> 
          <MarketCapChart />
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