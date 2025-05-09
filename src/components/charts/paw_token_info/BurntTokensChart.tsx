import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const BurntTokensChart = (props: any) => {
  const [burntData, setBurntData] = useState(props.data);
  useEffect(() => {
    setBurntData(props.data);
  }, [props]);

  return (
    <div>
      {/* Chart Title */}
      <div className="flex flex-row justify-end items-center">
        <span className="text-[10px] mr-2"> PAW Burnt Tokens - In Millions</span>
        <button className="border border-[#5851E8] font-bold py-1 px-2 text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
          M
        </button>
      </div>
      <div className="hidden md:block">
        <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={burntData}
          margin={{ top: 0, right: 10, left: 0, bottom: 10 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3862CF" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#001650" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis
              dataKey="time"
              height={45}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#F3F4F6",
                fontWeight: 300,
              }}
              tickMargin={20}
              stroke="white"
              strokeWidth={3}  // Set stroke thickness (default is 1)
              angle={-90}
              interval={0}
            />
            <YAxis
              width={100}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#F3F4F6", fontWeight: 300 }}
              tickFormatter={(value) => `${value}`} // Add "m" suffix for millions
              stroke="white"
              strokeWidth={3}  // Set stroke thickness (default is 1)
            />
          <Tooltip 
             contentStyle={{ 
              backgroundColor: '#1E293B', // your desired background color
              border: '1px solid #3B82F6', // optional border
              borderRadius: '8px',         // optional rounded corners
              color: '#F3F4F6'             // text color
            }}
          />
          <Area type="monotone" dataKey="Burnt" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="block md:hidden">
        <ResponsiveContainer width="100%" height={300} >
            <AreaChart data={burntData}
              margin={{ top: 0, right: 10, left: -40, bottom: 10 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3862CF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#001650" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                  dataKey="time"
                  height={45}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: "#F3F4F6",
                    fontWeight: 300,
                  }}
                  tickMargin={20}
                  stroke="white"
                  strokeWidth={2}  // Set stroke thickness (default is 1)
                  angle={-90}
                  interval={0}
                />
                <YAxis
                  tickLine={false}
                  tick={false}
                  stroke="white"
                  strokeWidth={2}  // Set stroke thickness (default is 1)
                />
              <Tooltip 
                 contentStyle={{ 
                  backgroundColor: '#1E293B', // your desired background color
                  border: '1px solid #3B82F6', // optional border
                  borderRadius: '8px',         // optional rounded corners
                  color: '#F3F4F6'             // text color
                }}
              />
              <Area type="monotone" dataKey="Burnt" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BurntTokensChart;
