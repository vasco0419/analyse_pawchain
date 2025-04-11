import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { time: "01/02",  APY: 13 },
  { time: "02/03",  APY: 5 },
  { time: "03/04",  APY: 7 },
  { time: "05/06",  APY: 20 },
  { time: "07/08",  APY: 14 },
  { time: "08/09",  APY: 19 },
  { time: "09/10",  APY: 25 },
  { time: "10/11",  APY: 21 },
  { time: "11/12",  APY: 20 },
  { time: "01/02",  APY: 17 },
];

const SwapBarChart = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-5">
        <span className="font-bold text-[10px]">Number Of Swaps(Millions)</span>
        {/* 1Y LOG Button */}
        <div className="flex justify-center items-center">
          <button className="border border-[#5851E8] bg-white font-bold py-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
            1Y
          </button>

          <button className="border border-[#5851E8] bg-white font-bold py-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
            LOG
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#749AFF" stopOpacity={1}/>
              <stop offset="95%" stopColor="#294AA4" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis
              dataKey="time"
              height={40}
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
              width={30}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              tickFormatter={(value) => `${value}`} // Add "m" suffix for millions
              stroke="white"
              strokeWidth={3}  // Set stroke thickness (default is 1)
            />
          <Tooltip />
          <Bar type="monotone" dataKey="APY" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SwapBarChart;
