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
  { time: "01/02",  APY: 13 },
  { time: "02/03",  APY: 5 },
  { time: "03/04",  APY: 7 },
  { time: "05/06",  APY: 20 },
  { time: "07/08",  APY: 14 },
  { time: "08/09",  APY: 19 },
];

const MarketCapChart = () => {
  return (
    <div>
      {/* Chart Title */}
      <p style={{ textAlign: "right", color: "#fff", marginTop: "-10px", fontSize: "10px" }}>
        PAW Market Cap - In Millions
      </p>

      <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}
        margin={{ top: 0, right: 10, left: 0, bottom: 10 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3862CF" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#001650" stopOpacity={0}/>
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
        <Area type="monotone" dataKey="APY" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketCapChart;
