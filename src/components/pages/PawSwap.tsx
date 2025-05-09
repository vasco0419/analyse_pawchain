"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"
import SwapBarChart from '../charts/paw_swap/SwapBarChart'
import SwapPieChart from "../charts/paw_swap/SwapPieChart";
import { PhoneHeader } from "./PhoneHeader";
import { PhoneFooter } from "./PhoneFooter";
import { BACKEND_API_URL } from "@/app/config";
import axios from "axios";

export const PawSwap = () => {
    const [loading, setLoading] = useState(false);
    const [totalSwapVolume, setTotalSwapVolume] = useState(0);
    const [crossChainSwapVolume, setCrossChainSwapVolume] = useState(0);
    const [onChainSwapVolume, setOnChainSwapVolume] = useState(0);
    const [swapFeeCollected, setSwapFeeCollected] = useState(0);
    const [swapGrowthRate, setSwapGrowthRate] = useState(0);
    const [swapCountList, setSwapCountList] = useState(Array<any>);
    const [pairSwapList, setPairSwapList] = useState(Array<any>);

    const numberToStrFunction = (num: number, fixed: number = 2): string => {
        const rounded = Math.round(num * 100) / 100;
        const str = rounded.toFixed(fixed);
        const [whole, decimals] = str.split(".");
        const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if(decimals == "00" || fixed == 0) return `${withCommas}`;
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
            const result = await axios.get(`${BACKEND_API_URL}/getPawSwap`);
            console.log(result);
            setTotalSwapVolume(result.data.data.totalSwapVolume);
            setCrossChainSwapVolume(result.data.data.crossChainSwapVolume);
            setOnChainSwapVolume(result.data.data.onChainSwapVolume);
            setSwapFeeCollected(result.data.data.swapFeeCollected);
            setSwapGrowthRate(result.data.data.swapGrowthRate);
            let swapCounts = [];
            for(let i = result.data.data.swapCountList.length - 1; i >= 0; i--){
                swapCounts.push(result.data.data.swapCountList[i]);
            }
            setSwapCountList(swapCounts);

            const colorList = ['#FF7575', '#FFF184', '#E0FFAE', '#44FF60',  '#7AF6FF', '#B9B9B9'];

            let pairSwapVolumes = [];
            let totalPairSwapVolume = 0;
            for(let i = 0; i < result.data.data.eachSwapVolumes.length; i++){
                pairSwapVolumes.push({name: result.data.data.eachSwapVolumes[i]._id, value: result.data.data.eachSwapVolumes[i].totalSwapVolume, color: colorList[i]});
                totalPairSwapVolume += result.data.data.eachSwapVolumes[i].totalSwapVolume;
            }
            pairSwapVolumes.push({name: "Others", value: result.data.data.totalSwapVolume - totalPairSwapVolume, color: colorList[5]});
            setPairSwapList(pairSwapVolumes);
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
            <span className="font-bold text-[36px]">Paw Swap</span>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center">
            <Image
            className="h-[34px] w-[177px]"
            src="/assets/images/Paw Chain logo.png"
            alt="Paw Chain Logo"
            width={177}
            height={34}
            />
            <span className="font-bold text-[36px]">Paw Swap</span>
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
                <div className="grid grid-cols-2 md:grid-cols-3 mt-4 md:mb-8 md:gap-[20px]">
                    <div className="col-span-3 md:col-span-1 gradient-box flex flex-col justify-center items-center mb-4 md:mb-0">
                        <span className="font-thin lg:font-bold text-[14px] md:text-[15px] lg:text-[16px]">Total Sawp Volume in USD</span>
                        <span className="block md:hidden lg:block font-bold text-[24px] mt-[2px]">${numberToStrFunction(totalSwapVolume)}</span>
                        <span className="hidden md:block lg:hidden font-bold text-[24px] mt-[2px]">{convertPhoneResponsiveData(totalSwapVolume+"")}</span>
                    </div>
                    <div className="col-span-1 gradient-box flex flex-col justify-center items-center mr-2 md:mr-0"> 
                        <span className="font-thin lg:font-bold text-[14px] md:text-[15px] lg:text-[16px] text-center">Cross-Chain Swaps</span>
                        <span className="block md:hidden lg:block font-bold text-[24px] mt-[2px]">${numberToStrFunction(crossChainSwapVolume)}</span>
                        <span className="hidden md:block lg:hidden font-bold text-[24px] mt-[2px]">{convertPhoneResponsiveData(crossChainSwapVolume+"")}</span>     
                    </div>
                    <div className="col-span-1 gradient-box flex flex-col justify-center items-center ml-2 md:mr-0">
                        <span className="font-thin lg:font-bold text-[14px] md:text-[15px] lg:text-[16px] text-center">On-Chain Swaps</span>
                        <span className="block md:hidden lg:block font-bold text-[24px] mt-[2px]">${numberToStrFunction(onChainSwapVolume)}</span>
                        <span className="hidden md:block lg:hidden font-bold text-[24px] mt-[2px]">{convertPhoneResponsiveData(onChainSwapVolume+"")}</span>
                    </div> 
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-8 gap-[20px]">
                    <div className="col-span-1 gradient-box flex flex-col justify-center items-center">
                        <span className="font-thin lg:font-bold text-[16px]">Swap Fee Collected</span>
                        <span className="font-bold text-[24px] mt-[2px]">{numberToStrFunction(swapFeeCollected)} PAW</span>
                    </div>
                    <div className="col-span-1 gradient-box flex flex-col justify-center items-center"> 
                        <span className="font-thin lg:font-bold text-[16px]">Swap Growth Rate</span>
                        <span className="font-bold text-[24px] mt-[2px]">{swapGrowthRate}%</span>     
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-8 gap-[20px]">
                    <div className="col-span-1 gradient-box">
                        <SwapBarChart data={swapCountList}/>
                    </div> 
                    <div className="col-span-1 gradient-box">
                        <SwapPieChart data={pairSwapList} />
                    </div>     
                </div>
                <PhoneFooter/>
            </>
        }
        </>
    );
}