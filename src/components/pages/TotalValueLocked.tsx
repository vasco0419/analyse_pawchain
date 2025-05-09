"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"
import TVLPieChart from "../charts/total_value_locked/TVLPieChart";
import TVLStackedBarChart from "../charts/total_value_locked/TVLStackedBarChart";
import TVLGrowthBarChart from "../charts/total_value_locked/TVLGrowthBarChart";
import { PhoneHeader } from "./PhoneHeader";
import { PhoneFooter } from "./PhoneFooter";
import { BACKEND_API_URL } from "@/app/config";
import axios from "axios";

export const TotalValueLocked = () => {
  const [loading, setLoading] = useState(false);
  const [tvlValue, setTvlValue] = useState("");
  const [poolData, setPoolData] = useState(Array<any>);
  const [tvlGrowthList, setTvlGrowthList] = useState(Array<any>);

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
      const result = await axios.get(`${BACKEND_API_URL}/getTotalValueLocked`);
      console.log(result);
      
      setTvlValue(numberToStrFunction(result.data.data.tvlValue));
      let pools = [];
      const colorList = ['#FF7575','#FFF184','#E0FFAE','#44FF60','#7AF6FF','#B9B9B9'];
      let poolValue = 0;
      for(let i = 0; i < result.data.data.poolData.length; i++){
        pools.push({name: result.data.data.poolData[i].name, value: result.data.data.poolData[i].value, color:colorList[i]});  
        poolValue += result.data.data.poolData[i].value;
      }
      pools.push({name: 'Others', value: result.data.data.totalPoolValue - poolValue, color: colorList[5]});
      setPoolData(pools);
      let tvlGrowths = [];
      for(let i = 1; i < result.data.data.tvlList.length; i++){
        let value = ((result.data.data.tvlList[i].tvlValue - result.data.data.tvlList[i-1].tvlValue) * 100 / result.data.data.tvlList[i-1].tvlValue).toFixed(2);
        let positive = 0;
        let negative = 0;
        if(parseFloat(value) > 0) {
          positive = parseFloat(value);
        }
        else{
          negative = parseFloat(value);
        }
        const date = new Date(result.data.data.tvlList[i].createdAt);
        tvlGrowths.push({time: (date.getMonth() + 1) + "/" + date.getDate(), timestamp: result.data.data.tvlList[i].createdAt , positive, negative})
      }
      console.log(tvlGrowths);
      setTvlGrowthList(tvlGrowths);
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
      <PhoneHeader />
      <div className="md:hidden flex flex-row justify-center items-center">
          <span className="font-bold text-[30px]">Total Value Locked</span>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <Image
          className="h-[34px] w-[177px]"
          src="/assets/images/Paw Chain logo.png"
          alt="Paw Chain Logo"
          width={177}
          height={34}
        />
        <span className="font-bold text-[36px]">Total Value Locked</span>
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
          <div className="flex lg:hidden md:flex flex-col gradient-box justify-center items-center">
          <span className="text-[16px]">Total PAW Chain TVL in USD </span>
          <span className="font-bold text-[24px] mt-[2px]">${tvlValue}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-5 gradient-box1 md:gradient-box mt-4">
              <TVLPieChart data={poolData}/>
            </div>
            <div className="col-span-7 lg:ml-4 mt-4">
                <div className = "hidden md:hidden lg:flex flex-col justify-center items-center gradient-box mb-4">
                  <span className="text-[16px]">Total PAW Chain TVL in USD </span>
                  <span className="font-bold text-[24px] mt-[2px]">${tvlValue}</span>
                </div>
                <div className = "gradient-box1 md:gradient-box">
                  <TVLStackedBarChart/>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gradient-box1 md:gradient-box mt-4">
              <TVLGrowthBarChart data={tvlGrowthList}/>
          </div>
          <PhoneFooter/>
        </>
      }
      <div className="hidden md:block lg:hidden mt-12">
      </div>
    </>
  );
}