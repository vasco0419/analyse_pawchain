import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data
const data = [
  { time: "Jan", APR: 2, APY: 3 },
  { time: "Feb", APR: 3, APY: 5 },
  { time: "Mar", APR: 4, APY: 7 },
  { time: "Apr", APR: 5, APY: 10 },
  { time: "May", APR: 6, APY: 14 },
  { time: "Jun", APR: 7, APY: 19 },
];

const StakingChart = () => {
  return (
    <div>
      {/* Chart Title */}
      <div className="flex flex-row justify-end items-center">
        <p className="hidden md:block" style={{ textAlign: "right", color: "#fff", fontSize: "10px" }}>
          Staking APY/APR (fixed/over time)
        </p>
        <div>
          <p className="md:hidden" style={{ textAlign: "right", color: "#fff", fontSize: "10px" }}>
            Staking APY/APR
          </p>
          <p className="md:hidden" style={{ textAlign: "right", color: "#fff", marginTop: "-3px", fontSize: "10px" }}>
            (fixed/over time)
          </p>
        </div>
        <button className="border border-[#5851E8] font-bold py-1 px-2 text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF] ml-[4px]">
          M
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 0, right: 10, left: 0, bottom: 10 }}>
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="colorAPR" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7069ec" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7069ec" stopOpacity={0.7} />
            </linearGradient>
            <linearGradient id="colorAPY" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9c97f5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9c97f5" stopOpacity={0.3} />
            </linearGradient>
          </defs>

          {/* Axes */}
          <XAxis 
            dataKey="time" 
            tick={{ fill: "#fff" }} 
            height={15}
            stroke="white"
            strokeWidth={3}  // Set stroke thickness (default is 1)
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: "#fff" }} 
            width={30}
            tickLine={false}
            stroke="white"
            strokeWidth={3}  // Set stroke thickness (default is 1)
          />
          
          {/* Tooltip */}
          {/* <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} /> */}

          {/* Legend */}
          <Legend verticalAlign="top" align="left" color="#FFF" iconType="square" wrapperStyle={{ color: "#FFFFF !important", marginLeft: "30px", marginTop:"-10px"}}  />

          {/* Areas */}
          <Area type="monotone" dataKey="APR" stroke="#6A5ACD" fill="url(#colorAPR)" />
          <Area type="monotone" dataKey="APY" stroke="#8470FF" fill="url(#colorAPY)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StakingChart;
