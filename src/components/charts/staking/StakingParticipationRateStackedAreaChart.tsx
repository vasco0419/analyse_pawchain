import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { time: "01/02", APR: 2, APY: 3 },
  { time: "02/02", APR: 3, APY: 5 },
  { time: "03/02", APR: 4, APY: 7 },
  { time: "04/02", APR: 5, APY: 10 },
  { time: "05/02", APR: 6, APY: 14 },
  { time: "06/02", APR: 7, APY: 19 },
];

const StakingParticipationRateStackedAreaChart = () => {
  return (
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 0, right: 10, left: 0, bottom: 10 }}>
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="colorAPY" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9c97f5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9c97f5" stopOpacity={0.3} />
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
          {/* Areas */}
          <Area type="monotone" dataKey="APY" stroke="#8470FF" fill="url(#colorAPY)" />
        </AreaChart>
      </ResponsiveContainer>
  );
};

export default StakingParticipationRateStackedAreaChart;
