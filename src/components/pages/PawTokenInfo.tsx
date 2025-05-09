"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"
import BurntTokensChart from "../charts/paw_token_info/BurntTokensChart";
import { PhoneHeader } from "./PhoneHeader";
import { PhoneFooter } from "./PhoneFooter";
import { BACKEND_API_URL } from "@/app/config";
import axios from "axios";

export const PawTokenInfo = () => {
  const [loading, setLoading] = useState(false);
  const [totalSupply, setTotalSupply] = useState("");
  const [pawTokensEachChain1, setPawTokensEachChain1] = useState(Array<any>);
  const [pawTokensEachChain2, setPawTokensEachChain2] = useState(Array<any>);
  const [cursor1, setCursor1] = useState(0);
  const [cursor2, setCursor2] = useState(0);
  const [burnWallets, setBurnWallets] = useState(Array<string>);
  const [pawBurntToken, setPawBurntTokens] = useState("");
  const [burntTokensChartData, setBurntTokensChartData] = useState(Array<any>); 

  const numberToStrFunction = (num: number, fixed: number = 2): string => {
    const rounded = Math.round(num * 100) / 100;
    const str = rounded.toFixed(fixed);
    const [whole, decimals] = str.split(".");
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(decimals == "00") return `${withCommas}`;
    else return `${withCommas}.${decimals}`;
  };

  const getChainName = (chainId: number): string => {
    switch (chainId) {
      case 1:
        return "ETH";
      case 56:
        return "BNB";
      case 25:
        return "CRO";
      case 137:
        return "POL";
      case 33139:
        return "APE";
      case 80094:
        return "BERA";
      case 250:
        return "FTM";
      case 43114:
        return "AVAX";
      case 101:
        return "SOL";
      case 8453:
        return "BASE";
      case 42161:
        return "ARBITURM"; 
    }
    return ""  
  } 
  
  const handleNext1 = () => {
    console.log("handelClick1");
    setCursor1(cursor1 + 1);
  }

  const handleNext2 = () => {
    console.log("handelClick2");
    setCursor2(cursor2 + 1);
  }

  const walletShowLess = (str: string):string => {
    return str.substring(0, 11) + "....." + str.substring(str.length - 5, str.length);
  }

  const changeDate_YY_MM_DD = (timestamps: number): string => {
    const date = new Date(timestamps); // Convert timestamp to Date object
    const year = date.getFullYear(); // 2025
    const month = date.getMonth() + 1;
    const day = date.getDay();
    return year+"/"+month+"/"+day;
  } 

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios.get(`${BACKEND_API_URL}/getTokenInfo`);
      console.log(result);
      setTotalSupply(numberToStrFunction(parseFloat(result.data.totalSupply)));
      
      let pawTokens1 = [];
      let pawTokens2 = [];
      for(let i = 0; i < result.data.pawTokensEachChain.eachTvlData.length; i++){
         if(i > 4){
            pawTokens2.push({chainId: result.data.pawTokensEachChain.eachTvlData[i].chainId, value:parseFloat(result.data.totalSupply)*result.data.pawTokensEachChain.pawPrice-result.data.pawTokensEachChain.eachTvlData[i].pawTokenValue});
         }
         else{
            pawTokens1.push({chainId:result.data.pawTokensEachChain.eachTvlData[i].chainId, value:parseFloat(result.data.totalSupply)*result.data.pawTokensEachChain.pawPrice-result.data.pawTokensEachChain.eachTvlData[i].pawTokenValue});
         }   
      }
      setPawTokensEachChain1(pawTokens1);
      setPawTokensEachChain2(pawTokens2);
      setBurnWallets(result.data.pawBurnt.BURN_WALLETS);
      setPawBurntTokens(result.data.pawBurnt.burntPawTokens);
      let burntData: Array<any> = [];
      for(let i = 0; i < result.data.pawBurnt.burnTxs.length; i++){
         if(burntData.length > 7) burntData.shift();
         burntData.push({time:changeDate_YY_MM_DD(result.data.pawBurnt.burnTxs[i].createdAt), Burnt: parseFloat(result.data.pawBurnt.burnTxs[i].tx_tokenTransfer[0].value)});
      }
      setBurntTokensChartData(burntData);
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
          <div className="hidden md:flex justify-between items-center gradient-box mt-4"> 
            <span className="font-bold text-[24px]">Paw Total Supply</span>
            <span className="text-[24px]">{totalSupply}</span>
          </div>
          <div className="md:hidden grid grid-cols-1 justify-center items-center gradient-box mt-4"> 
            <p className="font-bold text-[24px] text-center">Paw Total Supply</p>
            <p className="text-[24px] text-center">{totalSupply}</p>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <div className="flex justify-between min-w-[1024px] lg:min-w-[0px]">
              <div className="hidden lg:grid grid-cols-4 mt-4 gap-[21px] w-full mb-4 lg:mb-0">
                  <div className="col-span-1 gradient-box">
                      <div className="flex justify-between items-center">
                        <Image
                          src="/images/eth_item.png"
                          alt="token"
                          width={20.26}
                          height={33}
                        />
                        <div className="grid grid-cols-1">
                        {pawTokensEachChain1[cursor1%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[cursor1%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[cursor1%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain1[(cursor1+1)%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[(cursor1+1)%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[(cursor1+1)%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain1[(cursor1+2)%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[(cursor1+2)%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[(cursor1+2)%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain1[(cursor1+3)%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[(cursor1+3)%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[(cursor1+3)%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[cursor2%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[cursor2%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[cursor2%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[(cursor2+1)%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[(cursor2+1)%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[(cursor2+1)%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[(cursor2+2)%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[(cursor2+2)%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[(cursor2+2)%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[(cursor2+3)%5] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[(cursor2+3)%5].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[(cursor2+3)%5].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
                        </div>
                      </div>
                  </div>
              </div>
              <div className="block lg:hidden grid grid-cols-5 mt-4 gap-[21px] w-full mb-4 lg:mb-0">
                  <div className="col-span-1 gradient-box">
                      <div className="flex justify-between items-center">
                        <Image
                          src="/images/eth_item.png"
                          alt="token"
                          width={20.26}
                          height={33}
                        />
                        <div className="grid grid-cols-1">
                        {pawTokensEachChain1[0] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[0].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[0].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain1[1] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[1].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[1].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain1[2] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[2].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[2].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain1[3] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[3].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[3].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain1[4] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain1[4].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain1[4].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[0] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[0].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[0].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[1] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[1].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[1].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[2] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[2].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[2].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[3] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[3].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[3].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
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
                        {pawTokensEachChain2[4] && (
                          <>
                            <span className="text-[16px] text-right">
                              {getChainName(pawTokensEachChain2[4].chainId) || "Unknown"}
                            </span>
                            <span className="text-[16px] text-right">
                              {Number(pawTokensEachChain2[4].value).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </>
                        )}
                        </div>
                      </div>
                  </div>
              </div>
              <div className="hidden lg:grid grid-cols-1 ml-4 mt-4 gap-[21px]">
                  <button className="col-span-1 click-box flex flex-row justify-between items-center mr-4" onClick={handleNext1}>
                      <Image
                        src="/images/move.png"
                        alt="token"
                        width={47}
                        height={47}
                      />
                  </button>
                  <button className="col-span-1 click-box flex flex-row justify-between items-center mr-4" onClick={handleNext2}>
                      <Image
                        src="/images/move.png"
                        alt="token"
                        width={47}
                        height={47}
                      />
                  </button>
              </div>  
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gradient-box mt-4"> 
            <span className="font-bold text-[24px] text-center">Paw Tokens distributed across multiple networks</span>
          </div>
          <div className="hidden md:block gradient-box mt-4">
          {
            burnWallets.map((wallet, index) => {
              return (
                <div key={index} className="flex flex-row justify-between items-center">
                  <span className="font-bold text-[16px]">Paw Tokens in Burn Wallet</span>
                  <span
                    className="font-bold text-[16px]"
                    style={{
                      background: 'linear-gradient(to right, #D3D6FF, #5851E8)',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {walletShowLess(wallet)}
                  </span>
                  <span className="font-bold text-[16px]">{numberToStrFunction(parseFloat(pawBurntToken))}</span>
                </div>
              );
            })
          }
          </div>
          <div className="md:hidden grid grid-cols-1 justify-between items-center gradient-box mt-4">
          {
            burnWallets.map((wallet, index) => {
              return (
                <div key={index}>
                    <p className="font-bold text-[16px] text-center">Paw Tokens in Burn Wallet</p>
                    <p
                      className="font-bold text-[16px] mt-2 text-center"
                      style={{
                        background: 'linear-gradient(to right, #D3D6FF, #5851E8)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                    {walletShowLess(wallet)}
                    </p>
                    <p className="font-bold text-[16px] mt-2 text-center">{numberToStrFunction(parseFloat(pawBurntToken))}</p>
                </div>
              );
            })   
          }
          </div>              
          <div className="grid grid-cols-1 gradient-box mt-4 gap-[20px]"> 
              <BurntTokensChart data={burntTokensChartData}/>
          </div>
          <PhoneFooter/>
        </>
      }
    </>
  );
}